
const columns = [
    { name: "IMAGE", uid: "image" },
    { name: "NAME", uid: "name", sortable: true },
    { name: "EMAIL", uid: "email", sortable: true },
    { name: "GENDER", uid: "gender", sortable: true },
    { name: "PHONE NUMBER", uid: "phone_number" },
    { name: "DATE OF BIRTH", uid: "date_of_birth", sortable: true },
    { name: "CREATED AT", uid: "created_at", sortable: true },
    { name: "ACTIONS", uid: "actions" },
  ];
  
  const statusOptions = [
    { name: "Active", uid: "active" },
    { name: "Paused", uid: "paused" },
    { name: "Vacation", uid: "vacation" },
  ];
  
  const sellers = [
    { 
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      gender: "Male",
      image: "https://i.pinimg.com/236x/92/8d/d9/928dd93f6b1e9149045e1962fe75069f.jpg",
      phone_number: "012 345 678",
      date_of_birth: "1990-01-01",
      created_at: "2024-06-11"
    },
    { 
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      gender: "Female",
      image: "https://i.pinimg.com/236x/92/ed/01/92ed019ad688e127ca4892f47a4a1136.jpg",
      phone_number: "098 765 432",
      date_of_birth: "1985-05-15",
      created_at: "2024-06-10"
    },
    { 
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
      gender: "Male",
      image: "https://i.pinimg.com/236x/89/55/2a/89552a64ea1fa99f20bd1af1750b9d7d.jpg",
      phone_number: "092 789 765",
      date_of_birth: "1978-12-31",
      created_at: "2024-06-09"
    },
    { 
      id: 4,
      name: "Emily Brown",
      email: "emily@example.com",
      gender: "Female",
      image: "https://i.pinimg.com/236x/e1/df/82/e1df82ed3c649c0e20e003f9c8efe24d.jpg",
      phone_number: "092 847 984",
      date_of_birth: "1995-08-20",
      created_at: "2024-06-08"
    },
    { 
      id: 5,
      name: "David Wilson",
      email: "david@example.com",
      gender: "Male",
      image: "https://i.pinimg.com/236x/79/85/d5/7985d5a94de37e3397261442c20ab98c.jpg",
      phone_number: "061 788 776",
      date_of_birth: "1983-04-10",
      created_at: "2024-06-07"
    },
    { 
      id: 6,
      name: "Emma Martinez",
      email: "emma@example.com",
      gender: "Female",
      image: "https://i.pinimg.com/236x/66/f5/21/66f52119c4857faf10f7c53fff89f1b0.jpg",
      phone_number: "061 908 776",
      date_of_birth: "1992-11-25",
      created_at: "2024-06-06"
    },
    { 
      id: 7,
      name: "Daniel Taylor",
      email: "daniel@example.com",
      gender: "Male",
      image: "https://i.pinimg.com/236x/b0/dc/86/b0dc867ca2b551872db3e7e5d92df485.jpg",
      phone_number: "092 478 987",
      date_of_birth: "1980-07-05",
      created_at: "2024-06-05"
    },
    { 
      id: 8,
      name: "Olivia Anderson",
      email: "olivia@example.com",
      gender: "Female",
      image: "https://i.pinimg.com/236x/c7/80/66/c78066bae19644828f9cdafdd86bdebd.jpg",
      phone_number: "061 478 987",
      date_of_birth: "1998-03-15",
      created_at: "2024-06-04"
    },
    { 
      id: 9,
      name: "James Garcia",
      email: "james@example.com",
      gender: "Male",
      image: "https://i.pinimg.com/236x/49/0d/a0/490da0a02768e172f1512639ef9844bc.jpg",
      phone_number: "077 879 234",
      date_of_birth: "1976-09-18",
      created_at: "2024-06-03"
    },
    { 
      id: 10,
      name: "Sophia Lopez",
      email: "sophia@example.com",
      gender: "Female",
      image: "image10.jpg",
      phone_number: "8888888888",
      date_of_birth: "1987-06-30",
      created_at: "2024-06-02"
    },
    { 
      id: 11,
      name: "William Martinez",
      email: "william@example.com",
      gender: "Male",
      image: "https://i.pinimg.com/236x/e1/7e/ba/e17eba6f72158a4caf280142cebb3e61.jpg",
      phone_number: "092 678 324",
      date_of_birth: "1993-02-28",
      created_at: "2024-06-01"
    },
    { 
      id: 12,
      name: "Isabella Hernandez",
      email: "isabella@example.com",
      gender: "Female",
      image: "https://i.pinimg.com/236x/79/f8/57/79f8570d29c8f65da62ebcfbd87f8ed7.jpg",
      phone_number: "092 098 324",
      date_of_birth: "1974-10-12",
      created_at: "2024-05-31"
    },
    { 
      id: 13,
      name: "Ethan Smith",
      email: "ethan@example.com",
      gender: "Male",
      image: "https://i.pinimg.com/236x/64/56/59/6456599aae1504199f2369c0b5a0da09.jpg",
      phone_number: "012 312 312",
      date_of_birth: "1989-07-22",
      created_at: "2024-05-30"
    },
    { 
      id: 14,
      name: "Ava Johnson",
      email: "ava@example.com",
      gender: "Female",
      image: "https://i.pinimg.com/236x/58/d0/05/58d005d5ff45a31231b597a9d778dc2b.jpg",
      phone_number: "098 798 798",
      date_of_birth: "1996-04-05",
      created_at: "2024-05-29"
    },
    { 
      id: 15,
      name: "Mason Brown",
      email: "mason@example.com",
      gender: "Male",
      image: "https://i.pinimg.com/236x/44/fc/77/44fc77729be5f8aa71405f33b59eece7.jpg",
      phone_number: "065 465 465",
      date_of_birth: "1982-11-19",
      created_at: "2024-05-28"
    },
    { 
      id: 16,
      name: "Charlotte Lee",
      email: "charlotte@example.com",
      gender: "Female",
      image: "https://i.pinimg.com/236x/59/b0/93/59b0933ea82d337a1a4ef41fb0353c79.jpg",
      phone_number: "032 132 132",
      date_of_birth: "1997-08-17",
      created_at: "2024-05-27"
    },
    { 
      id: 17,
      name: "Liam Clark",
      email: "liam@example.com",
      gender: "Male",
      image: "https://i.pinimg.com/236x/d4/4e/fc/d44efcae141a7506cf24257b79dbb4e7.jpg",
      phone_number: "074 185 296",
      date_of_birth: "1986-03-08",
      created_at: "2024-05-26"
    },
    { 
      id: 18,
      name: "Grace Taylor",
      email: "grace@example.com",
      gender: "Female",
      image: "https://i.pinimg.com/236x/94/ca/ae/94caaea9b28e0bdc9b51c0ba4763edf0.jpg",
      phone_number: "092 529 637",
      date_of_birth: "1994-09-29",
      created_at: "2024-05-25"
    },
  ];
  
  export { columns, sellers, statusOptions };
  