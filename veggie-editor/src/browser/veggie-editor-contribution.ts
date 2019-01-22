import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";
import { TheiaTreeEditorContribution } from "theia-tree-editor";
import { WidgetManager, WidgetOpenerOptions } from "@theia/core/lib/browser";
import { SelectionService } from "@theia/core";
import { FileDownloadService } from "@theia/filesystem/lib/browser/download/file-download-service";
import URI from '@theia/core/lib/common/uri';

export const VeggieEditorCommand = {
  id: 'VeggieEditor.command',
  label: "Shows a message"
};

@injectable()
export class VeggieEditorCommandContribution implements CommandContribution {

  constructor(
    @inject(MessageService) private readonly messageService: MessageService,
  ) { }

  registerCommands(registry: CommandRegistry): void {
    registry.registerCommand(VeggieEditorCommand, {
      execute: () => this.messageService.info('Hello World!')
    });
  }
}

@injectable()
export class VeggieEditorMenuContribution implements MenuContribution {

  registerMenus(menus: MenuModelRegistry): void {
    menus.registerMenuAction(CommonMenus.EDIT_FIND, {
      commandId: VeggieEditorCommand.id,
      label: 'Say Hello'
    });
  }
}
export class SmartHomeTreeEditorContribution extends TheiaTreeEditorContribution {

  constructor(
    @inject(WidgetManager) widgetManager: WidgetManager,
    @inject(MessageService) messageService: MessageService,
    @inject(SelectionService) selectionService: SelectionService,
    @inject(FileDownloadService) fileDownloadService: FileDownloadService
  ) {
    super(widgetManager, messageService, selectionService, fileDownloadService);
  }

  canHandle(uri: URI): number {
    if (uri.path.ext === '.json') {
      return 1000;
    }
    return 0;
  }

  // TODO remove this when TreeEditorWidget is a navigatible widget
  createWidgetOptions(uri: URI, options?: WidgetOpenerOptions): URIWidgetOpenerOptions {
    return {
      uri:uri.withoutFragment().toString()
    }
  }
}

interface URIWidgetOpenerOptions extends WidgetOpenerOptions{
  uri: string
}
