const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.setMenu(null)
  win.webContents.setUserAgent("DiscordBot (https://github.com/discordjs/discord.js, 12.5.3) Node.js/v14.15.1");
  win.loadURL('https://fox3000foxy.github.io/dbc/index.html?token=OTA0NzEzMDk1MDE0OTIwMjEz.YX_hug.JCFnG8vkcjMKnHvSU_oHRZpGMvs')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})