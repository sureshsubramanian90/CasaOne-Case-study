export const catagoreyList = [
    {
        type: "orderTotal",
        id: "orderTotal",
        displayName: "Order Total"
    },
    {
        type: "age",
        id: "age",
        displayName: "Age"
    },
    {
        type: "tenure",
        id: "tenure",
        displayName: "Tenure"
    },
    {
        type: "catagorey",
        id: "catagorey",
        displayName: "Catagorey"
    },
    {
        type: "zipCode",
        id: "zipCode",
        displayName: "Zip code"
    }
];

export const rule = {
    orderTotal: [
        {
            displayName: "less than or equal to",
            id: 'lessOrEqual',
            type: 'lessOrEqual',
            componentType: "input",
            placeHolder: "Order total"
        },
        {
            displayName: "greater than or equal to",
            id: 'greaterOrEqual',
            type: 'greaterOrEqual',
            componentType: "input",
            placeHolder: "Order total"
        },
        {
            displayName: "between",
            id: 'inBetween',
            type: 'inBetween',
            componentType: "input",
            isMinMax: true,
            minPlaceHolder: "Min Order total",
            maxPlaceHolder: "Max Order total"
        },
        {
            displayName: "equal to",
            id: 'equal',
            type: 'equal',
            componentType: "input",
            placeHolder: "Order total"
        }
    ],
    age: [
        {
            displayName: "less than or equal to",
            id: 'lessOrEqual',
            type: 'lessOrEqual',
            componentType: "input",
            placeHolder: "Age",
            lengthLimit: 2,
        },
        {
            displayName: "greater than or equal to",
            id: 'greaterOrEqual',
            type: 'greaterOrEqual',
            componentType: "input",
            placeHolder: "Age",
            lengthLimit: 2,
        },
        {
            displayName: "between",
            id: 'inBetween',
            type: 'inBetween',
            componentType: "input",
            isMinMax: true,
            minPlaceHolder: "Min Age",
            maxPlaceHolder: "Max Age",
            lengthLimit: 2,
        },
        {
            displayName: "equal to",
            id: 'equal',
            type: 'equal',
            componentType: "input",
            placeHolder: "Age",
            lengthLimit: 2,
        }
    ],
    tenure: [
        {
            displayName: "less than or equal to",
            id: 'lessOrEqual',
            type: 'lessOrEqual',
            componentType: "input",
            placeHolder: "Tenure",
            lengthLimit: 2,
        },
        {
            displayName: "greater than or equal to",
            id: 'greaterOrEqual',
            type: 'greaterOrEqual',
            componentType: "input",
            placeHolder: "Tenure",
            lengthLimit: 2,
        },
        {
            displayName: "between",
            id: 'inBetween',
            type: 'inBetween',
            componentType: "input",
            isMinMax: true,
            minPlaceHolder: "Min Tenure",
            maxPlaceHolder: "Max Tenure",
            lengthLimit: 2,
        },
        {
            displayName: "equal to",
            id: 'equal',
            type: 'equal',
            componentType: "input",
            placeHolder: "Tenure",
            lengthLimit: 2,
        }
    ],
    zipCode: [
        {
            displayName: "any of",
            id: 'any',
            type: 'any',
            componentType: "input",
            placeHolder: 'Zip Code',
            isMultiValue: true,
            lengthLimit: 5
        },
    ],
    catagorey: [
        {
            displayName: "any of",
            id: 'any',
            type: 'any',
            componentType: "input",
            placeHolder: 'Product Id',
            isMultiValue: true,
            lengthLimit: 8
        },
    ]
}

export const message = {
    maxVal: "Max Val cannot be less than min val",
}