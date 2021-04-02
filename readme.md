
# MH Populate

 `mhPopulate` A  JavaScript Libary   which will populate data between  arrays  with n looping and high performance 

<a href="https://www.buymeacoffee.com/mohammadIhmaid" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## Installation

```bash
npm install mh-populate
```

## Usage

```typescript
import mhPopulate from "mh-populate"

let countryArray = [  
  {'name': 'Afghanistan', 'code': 'AF'},  
  {'name': 'land Islands', 'code': 'AX'},  
  {'name': 'Albania', 'code': 'AL'},  
  {'name': 'Algeria', 'code': 'DZ'},  
  {'name': 'American Samoa', 'code': 'AS'},  
  {'name': 'AndorrA', 'code': 'AD'},  
 .....
];

let codeArray = [  
  {'lat': '555.555','lng':'555.555','code': 'AF',...},  
  {'lat': '555.555','lng':'555.555','code': 'AX',...},  
  {'lat': '555.555','lng':'555.555','code': 'AL'},  
  {'lat': '555.555','lng':'555.555','code': 'DZ'},  
  {'lat': '555.555','lng':'555.555','code': 'AS'},  
  {'lat': '555.555','lng':'555.555','code': 'AD'},  
 .....
];


mhPopulate(countryArray, codeArray, 'code')

```

| Attribute |Type|Descripton|
|--|--|--|
| originalArray | Array|data that include foreign key |
| populateArray | Array|populate data|
| key | String|populate key|





## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
