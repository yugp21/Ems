
const employees = [
    {
        "id": 1,
        "firstName": "Rahul",
        "name": "Sharma",
        "email": "rahul.sharma@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Prepare monthly report",
                "taskDescription": "Compile and review the monthly financial report.",
                "taskDate": "2024-10-10",
                "category": "Finance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client follow-up",
                "taskDescription": "Reach out to new clients and answer questions.",
                "taskDate": "2024-10-12",
                "category": "Customer Service",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Update website",
                "taskDescription": "Add new content and update team page.",
                "taskDate": "2024-10-15",
                "category": "Web Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Priya",
        "name": "Singh",
        "email": "priya.singh@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Schedule team meeting",
                "taskDescription": "Arrange meeting with project team.",
                "taskDate": "2024-10-11",
                "category": "Management",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Design product mockup",
                "taskDescription": "Create a mockup for the new product feature.",
                "taskDate": "2024-10-14",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Amit",
        "name": "Patel",
        "email": "amit.patel@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Fix bugs in app",
                "taskDescription": "Resolve the bugs reported in the last testing round.",
                "taskDate": "2024-10-09",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Conduct user interviews",
                "taskDescription": "Interview five users for feedback.",
                "taskDate": "2024-10-13",
                "category": "Research",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Sanjana",
        "name": "Rao",
        "email": "sanjana.rao@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Social media content",
                "taskDescription": "Plan and schedule posts for next month.",
                "taskDate": "2024-10-17",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Employee training session",
                "taskDescription": "Organize a training session for the new team.",
                "taskDate": "2024-10-20",
                "category": "HR",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Arjun",
        "name": "Mehta",
        "email": "arjun.mehta@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Inventory check",
                "taskDescription": "Verify stock and update records.",
                "taskDate": "2024-10-18",
                "category": "Operations",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Customer feedback analysis",
                "taskDescription": "Review and analyze customer feedback.",
                "taskDate": "2024-10-19",
                "category": "Customer Service",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    }
];

const admin = [{
    "id": 1,
    "email": "admin@me.com",
    "password": "123",
}];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { employees, admin };
};
