// necessary imports
import { VeggieEditorCommandContribution, VeggieEditorMenuContribution, SmartHomeTreeEditorContribution } from './veggie-editor-contribution';
import {
  CommandContribution,
  MenuContribution, 
  Resource,
  MessageService,

} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";
import { WidgetFactory, OpenHandler, WidgetManager, NavigatableWidgetOptions } from "@theia/core/lib/browser";
import { ResourceProvider } from "@theia/core/lib/common";
import { TreeEditorWidget, TreeEditorWidgetOptions, DirtyResourceSavable } from "theia-tree-editor";
import { getData} from "@jsonforms/core";
import URI from "@theia/core/lib/common/uri";
import App, {initStore} from "../App";
import { ThemeService } from '@theia/core/lib/browser/theming';

class MyResourceSaveable extends DirtyResourceSavable {
  constructor(resource: Resource, getData: () => any,  messageService: MessageService,  widgetManager: WidgetManager) {
    super(resource, getData, widgetManager, messageService);
  }
  onSave(data: any) { 
    return  Promise.resolve(JSON.stringify(data))
  }
}
  
export default new ContainerModule(bind => {
  // add your contribution bindings here
  let LIGHT_THEME_ID = "light";
  ThemeService.get().setCurrentTheme(LIGHT_THEME_ID);

  bind(CommandContribution).to(VeggieEditorCommandContribution);
  bind(MenuContribution).to(VeggieEditorMenuContribution);
  bind<WidgetFactory>(WidgetFactory).toDynamicValue(ctx => ({
    id: 'theia-tree-editor',
    async createWidget(uri: NavigatableWidgetOptions): Promise<TreeEditorWidget> {
      const { container } = ctx;
      const resource = await container.get<ResourceProvider>(ResourceProvider)(new URI(uri.uri));
      const widgetManager = await container.get<WidgetManager>(WidgetManager);
      const messageService = await container.get<MessageService>(MessageService);
      const store = await initStore();
      const child = container.createChild();
      child.bind<TreeEditorWidgetOptions>(TreeEditorWidgetOptions)
        .toConstantValue({ resource, store, EditorComponent: App, fileName: new URI(uri.uri).path.base, 
          saveable: new MyResourceSaveable(resource, () => getData(store.getState()), messageService, widgetManager), onResourceLoad: JSON.parse });
      return child.get(TreeEditorWidget);
    }
  }));
  bind(TreeEditorWidget).toSelf();
      
  bind(SmartHomeTreeEditorContribution).toSelf().inSingletonScope();
  [CommandContribution, MenuContribution, OpenHandler].forEach(serviceIdentifier =>
    bind(serviceIdentifier).toService(SmartHomeTreeEditorContribution)
  );
});
