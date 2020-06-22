export const data = [
    {
        id: 1234,
        createdBy: "Suresh Subramanian",
        data: [
            {
                catagorey: {
                    type: "orderTotal",
                    id: "orderTotal",
                    displayName: "Order Total",
                },
                rule: {
                    displayName: "less than or equal to",
                    id: 'lessOrEqual',
                    type: 'lessOrEqual',
                    componentType: "input",
                    placeHolder: "Order total"
                },
                value: ["1234"]
            },
            {
                catagorey: {
                    type: "tenure",
                    id: "tenure",
                    displayName: "Tenure"
                },
                rule: {
                    displayName: "between",
                    id: 'inBetween',
                    type: 'inBetween',
                    componentType: "input",
                    isMinMax: true,
                    minPlaceHolder: "Min Order total",
                    maxPlaceHolder: "Max Order total"
                },
                value: ["12", "45"]
            }
        ]
    },
    {
        id: 12345,
        createdBy: "Praveen Ganesh",
        data: [
            {
                catagorey: {
                    type: "orderTotal",
                    id: "orderTotal",
                    displayName: "Order Total",
                },
                rule: {
                    displayName: "less than or equal to",
                    id: 'lessOrEqual',
                    type: 'lessOrEqual',
                    componentType: "input",
                    placeHolder: "Order total"
                },
                value: ["1234"]
            },
            {
                catagorey: {
                    type: "tenure",
                    id: "tenure",
                    displayName: "Tenure"
                },
                rule: {
                    displayName: "between",
                    id: 'inBetween',
                    type: 'inBetween',
                    componentType: "input",
                    isMinMax: true,
                    minPlaceHolder: "Min Order total",
                    maxPlaceHolder: "Max Order total"
                },
                value: ["1", "4"]
            }
        ]
    },
    {
        id: 12346,
        createdBy: "Mark Warhaul",
        data: [
            {
                catagorey: {
                    type: "catagorey",
                    id: "catagorey",
                    displayName: "Catagorey"
                },
                rule: {
                    displayName: "any of",
                    id: 'any',
                    type: 'any',
                    componentType: "input",
                    placeHolder: 'Product Id',
                },
                value: ["12345678", "12345679", "12345670"]
            },
            {
                catagorey: {
                    type: "age",
                    id: "age",
                    displayName: "Age"
                },
                rule: {
                    displayName: "between",
                    id: 'inBetween',
                    type: 'inBetween',
                    componentType: "input",
                    isMinMax: true,
                    minPlaceHolder: "Min Age",
                    maxPlaceHolder: "Max Age",
                    lengthLimit: 2,
                },
                value: ["12", "46"]
            }
        ]
    }
]