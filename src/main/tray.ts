import { Menu, Tray, nativeImage, BrowserWindow } from 'electron'
import path from 'node:path'

export function createTray(window: BrowserWindow) {
  const icon = nativeImage.createFromPath(
    path.resolve('resources', 'rotionTemplate.png'),
  )
  const tray = new Tray(icon)
  const menu = Menu.buildFromTemplate([
    {
      label: 'Rotion',
      enabled: false,
    },
    { type: 'separator' },
    {
      label: 'Criar novo documento',
      click: () => {
        window.webContents.send('new-document')
      },
    },
    { type: 'separator' },
    {
      label: 'Documentos Recentes',
      enabled: false,
    },
    {
      label: 'Discover',
      accelerator: 'CommandOdControl+1',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'Ignite',
      accelerator: 'CommandOdControl+2',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'Rocketseat',
      accelerator: 'CommandOdControl+3',
      acceleratorWorksWhenHidden: false,
    },
  ])
  tray.setContextMenu(menu)
}
