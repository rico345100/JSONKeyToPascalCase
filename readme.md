# JSON Key To Pascal Case
Simple nodejs program that converts JSON keys to the pascal case.

## Requirements
- This program wrote in Node.js 14.12.0, but pretty sure will work in the past version but must have the support Async function.

## Getting Started
1. Install deps

```bash
$ npm install
```

2. Prepare the source json.

```json
{
    "title": "My Awesome Title",
    "menu": {
        "newGame": "New Game",
        "options": "Options",
        "exitGame": "Exit Game"
    },
    "tips": [
        "Some tips..."
    ],
    "common": {
        "error": {
            "unknown": "Unknown Error"
        }
    }
}
```

3. Run
```bash
$ node convert -i input.json -o result.json
```

4. Check the result.

```json
{
    "Title": "My Awesome Title",
    "Menu": {
        "NewGame": "New Game",
        "Options": "Options",
        "ExitGame": "Exit Game"
    },
    "Tips": [
        "Some tips..."
    ],
    "Common": {
        "Error": {
            "Unknown": "Unknown Error"
        }
    }
}
```

## Parameters
- i: Source json path. Must be specified.
- o: Name of the output JSON. It's optional and the default is result.json

## License
MIT.

# Buy me a coffee!
If you enjoyed this project, you can buy me a coffee so that I can make more of this kind of stuff.

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PVXTU5FJNBLDS)
