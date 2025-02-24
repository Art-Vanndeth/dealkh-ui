const columns = [
    { name: "NAME", uid: "name", sortable: true },
    { name: "DESCRIPTION", uid: "description", sortable: true },
    { name: "DICOUNT TYPE", uid: "discount", sortable: true },
    { name: "CREATED AT", uid: "created_at" },
    { name: "CREATED BY", uid: "created_by" },
    { name: "ACTIONS", uid: "actions" },
  ];
  
    const statusOptions = [
      { name: "Active", uid: "active" },
      { name: "Paused", uid: "paused" },
    ];
  
  const wishlists =[
    {
      "id": 1,
      "name": "Alice Johnson",
      "description": "Summer Collection",
      "discount": "Seasonal Sale",
      "created_at": "2024-06-01",
      "created_by": "John Doe"
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "description": "Winter Collection",
      "discount": "Clearance Sale",
      "created_at": "2023-12-01",
      "created_by": "Alice Smith"
    },
    {
      "id": 3,
      "name": "Cathy Brown",
      "description": "Spring Collection",
      "discount": "Seasonal Sale",
      "created_at": "2024-03-01",
      "created_by": "Emma Johnson"
    },
    {
      "id": 4,
      "name": "David Wilson",
      "description": "Fall Collection",
      "discount": "Autumn Sale",
      "created_at": "2023-09-01",
      "created_by": "Michael Brown"
    },
    {
      "id": 5,
      "name": "Eva Davis",
      "description": "New Year Collection",
      "discount": "New Year Sale",
      "created_at": "2024-01-01",
      "created_by": "Sophia Garcia"
    },
    {
      "id": 6,
      "name": "Frank Miller",
      "description": "Back to School",
      "discount": "School Sale",
      "created_at": "2024-08-01",
      "created_by": "David Wilson"
    },
    {
      "id": 7,
      "name": "Grace Lee",
      "description": "Holiday Collection",
      "discount": "Holiday Sale",
      "created_at": "2023-11-01",
      "created_by": "Cathy Brown"
    },
    {
      "id": 8,
      "name": "Henry Garcia",
      "description": "Valentine's Collection",
      "discount": "Valentine's Sale",
      "created_at": "2024-02-01",
      "created_by": "Alice Johnson"
    },
    {
      "id": 9,
      "name": "Isabella Martinez",
      "description": "Black Friday Deals",
      "discount": "Black Friday Sale",
      "created_at": "2023-11-29",
      "created_by": "John Doe"
    },
    {
      "id": 10,
      "name": "Jack Anderson",
      "description": "Cyber Monday Deals",
      "discount": "Cyber Monday Sale",
      "created_at": "2023-11-30",
      "created_by": "Eva Davis"
    },
    {
      "id": 11,
      "name": "Karen Thomas",
      "description": "Summer Collection",
      "discount": "Seasonal Sale",
      "created_at": "2024-06-01",
      "created_by": "John Doe"
    },
    {
      "id": 12,
      "name": "Liam Taylor",
      "description": "Winter Collection",
      "discount": "Clearance Sale",
      "created_at": "2023-12-01",
      "created_by": "Alice Smith"
    },
    {
      "id": 13,
      "name": "Mia Harris",
      "description": "Spring Collection",
      "discount": "Seasonal Sale",
      "created_at": "2024-03-01",
      "created_by": "Emma Johnson"
    },
    {
      "id": 14,
      "name": "Noah Clark",
      "description": "Fall Collection",
      "discount": "Autumn Sale",
      "created_at": "2023-09-01",
      "created_by": "Michael Brown"
    },
    {
      "id": 15,
      "name": "Olivia Lewis",
      "description": "New Year Collection",
      "discount": "New Year Sale",
      "created_at": "2024-01-01",
      "created_by": "Sophia Garcia"
    },
    {
      "id": 16,
      "name": "Paul Walker",
      "description": "Back to School",
      "discount": "School Sale",
      "created_at": "2024-08-01",
      "created_by": "David Wilson"
    },
    {
      "id": 17,
      "name": "Quincy Young",
      "description": "Holiday Collection",
      "discount": "Holiday Sale",
      "created_at": "2023-11-01",
      "created_by": "Cathy Brown"
    },
    {
      "id": 18,
      "name": "Rachel King",
      "description": "Valentine's Collection",
      "discount": "Valentine's Sale",
      "created_at": "2024-02-01",
      "created_by": "Alice Johnson"
    },
    {
      "id": 19,
      "name": "Sam Hall",
      "description": "Black Friday Deals",
      "discount": "Black Friday Sale",
      "created_at": "2023-11-29",
      "created_by": "John Doe"
    },
    {
      "id": 20,
      "name": "Tina Allen",
      "description": "Cyber Monday Deals",
      "discount": "Cyber Monday Sale",
      "created_at": "2023-11-30",
      "created_by": "Eva Davis"
    }
  ];
  
  export { columns, wishlists, statusOptions };
  