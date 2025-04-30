# Instructions to implement

**Note:** Node.js must be installed in your system to run this.

1. Clone [this](https://github.com/huzaifa621/mongodb-mcp.git) repository.

2. Install the dependencies.
   `npm install`

3. Open Claude desktop, if you don't have it then install it from [here](https://claude.ai/download).

4. Enable the **Developer mode** in Claude.

5. Once Developer mode is enabled. You will see `Developer` option in the menu.
   ![developer_option](https://github.com/huzaifa621/mongodb-mcp/blob/main/resources/developer_option.png?raw=true)

6. Open `Settings`
    ![Settings](https://github.com/huzaifa621/mongodb-mcp/blob/main/resources/settings_option.png?raw=true)

7. Click on `Developer` and click on `Edit Config`
   ![edit_config](https://github.com/huzaifa621/mongodb-mcp/blob/main/resources/edit_config.png?raw=true)

8. `claude_desktop_config.json` will open. Add the following object inside the `mcpServers` object.
   ```text
   "MongoDB": {
            "command": "node",
            "args": [<Paste index.js file path here>]
         }
   ```
   ![MongoDB_server](https://github.com/huzaifa621/mongodb-mcp/blob/main/resources/MongoDB_server.png?raw=true)

9. Restart your Claude desktop and you will be able to see the tools.
   ![tools](https://github.com/huzaifa621/mongodb-mcp/blob/main/resources/tools.png?raw=true)

**Note:** In the images, you must be seeing `LeaveManager` and `LeaveManager` key. It is another MCP server which I created. Do not get worry if you don't see it in your system.

Enjoy!