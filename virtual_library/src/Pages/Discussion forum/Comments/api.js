

export const getComments = async () => {
    return [
        {
            "title": "I have a big problem",
            "id": "1",
            "body": "First comment",
            "username": "Jack",
            "userId": "1",
            "parentId": null,
            "createdAt": "2021-08-16T23:00:33.010+02:00"
        },
        {
            "id": "2",
            "body": "Second comment",
            "username": "John",
            "userId": "2",
            "parentId": null,
            "createdAt": "2021-08-16T23:00:33.010+02:00"
        },
        {
            "id": "3",
            "body": "First comment first child",
            "username": "John",
            "userId": "2",
            "parentId": "1",
            "createdAt": "2021-08-16T23:00:33.010+02:00"
        },
        {
            "id": "4",
            "body": "Second comment second child",
            "username": "John",
            "userId": "2",
            "parentId": "2",
            "createdAt": "2021-08-16T23:00:33.010+02:00"
        }
    ],
        [
            [
                {
                    "id": "1",
                    "body": "First comment",
                    "title": "I have a big problem",
                    "userId": "1",
                    "username": "Jack",
                    "createdAt": "2021-08-16T23:00:33.010+02:00"
                }
            ],
            [
                {
                    "id": "1",
                    "body": "First comment",
                    "title": "I have a big problem",
                    "userId": "1",
                    "parentId": null,
                    "username": "Jack",
                    "createdAt": "2021-08-16T23:00:33.010+02:00"
                },
                {
                    "id": "3",
                    "body": "First comment first child",
                    "title": "I have a big problem",
                    "userId": "2",
                    "parentId": "1",
                    "username": "John",
                    "createdAt": "2021-08-16T23:00:33.010+02:00"
                },
                {
                    "id": "2",
                    "body": "Second comment",
                    "title": "My money has been stolen",
                    "userId": "2",
                    "parentId": null,
                    "username": "John",
                    "createdAt": "2021-08-16T23:00:33.010+02:00"
                },
                {
                    "id": "4",
                    "body": "Second comment second child",
                    "title": "My money has been stolen",
                    "userId": "2",
                    "parentId": "2",
                    "username": "John",
                    "createdAt": "2021-08-16T23:00:33.010+02:00"
                },
                {
                    "id": "5",
                    "body": "Third commit",
                    "title": "My money has been stolen",
                    "userId": "2",
                    "parentId": null,
                    "username": "Godson",
                    "createdAt": "2021-08-16T23:00:33.010+02:00"
                },
                {
                    "id": "exddiq2zq",
                    "body": "Third commit Second child",
                    "userId": 86,
                    "parentId": "5",
                    "username": "Synx",
                    "createdAt": "2022-11-03T21:43:24.906Z"
                },
                {
                    "id": "tnxfsnpbi",
                    "body": "Third commit Third child",
                    "userId": 86,
                    "parentId": "5",
                    "username": "Synx",
                    "createdAt": "2022-11-03T21:44:01.478Z"
                },
                {
                    "id": "qbdhd7svm",
                    "body": "There is a boy",
                    "parentId": "1",
                    "userId": 86,
                    "username": "Synx",
                    "createdAt": "2022-11-03T22:39:30.159Z"
                }
            ]
        ]
};


// console.log(localStorage.getItem('user'))

export const CreateComment = (text, parentId = null) => {


    return {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        userId: "1",
        username: "John",
        createdAt: new Date().toISOString(),
    };
};

export const updateComment = async (text) => {
    return { text };
};

export const deleteComment = async () => {
    return {};
};