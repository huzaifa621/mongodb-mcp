# Instructions to implement

**Note:** Node.js must be installed in your system to run this.

1. Clone [this](https://github.com/huzaifa621/mongodb-mcp.git) repository.
<br />
2. Install the dependencies.
   `npm install`
<br />
3. Open Claude desktop, if you don't have it then install it from [here](https://claude.ai/download).
<br />
4. Enable the **Developer mode** in Claude.
<br />
5. Once Developer mode is enabled. You will see `Developer` option in the menu.
   ![developer_option](developer_option.png)
<br />
6. Open `Settings`
    ![Settings](settings_option.png)
<br />
7. Click on `Developer` and click on `Edit Config`
   ![edit_config](edit_config.png)
<br />
8. `claude_desktop_config.json` will open. Add the following object inside the `mcpServers` object.
   ```text
   "MongoDB": {
            "command": "node",
            "args": [<Paste index.js file path here>]
         }
   ```
   ![MongoDB_server](MongoDB_server.png)

**Note:** In the images, you must be seeing `LeaveManager` and `LeaveManager` key. It is another MCP server which I created. Do not get worry if you don't see it in your system.