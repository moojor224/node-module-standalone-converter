# Usage

use `npm install` to add the packages you want to include

import those packages inside of src/index.mjs

define any exports as properties on the `GLOBAL_MODULE_EXPORTS` object

run `npm run build`

copy the resulting dist/node_modules.js file to wherever you need it

# Example

## in this project

### run

```bash
npm install zod
```

### src/index.mjs

```javascript
import z from "zod";
GLOBAL_MODULE_EXPORTS.z = z;
```

### run

```bash
npm run build
```

## in your other project

file structure
- index.html
- node_modules.js

### index.html

```html
<!DOCTYPE html>
<html>
<body>
    <script type="module">
        import modules  from "./node_modules.js";
        const { z } = modules;
        let string_validator = z.string();
        string_validator.parse("Hello World!");
    </script>
</body>
</html>
```