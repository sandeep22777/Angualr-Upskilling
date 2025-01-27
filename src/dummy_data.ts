export default class Dummy_Data {
  dummy_data = Array.from({ length: 35 }, (_, index) => ({
    id: index + 1,
    name: `Name ${index + 1}`,
    age: Math.floor(Math.random() * 60) + 18, // Random age between 18 and 77
    email: `user${index + 1}@example.com`,
    phone: `123-456-78${index.toString().padStart(2, '0')}`,
    city: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'][
      Math.floor(Math.random() * 5)
    ],
    isActive: Math.random() > 0.5, // Randomly true or false
  }));
}
