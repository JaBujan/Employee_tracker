# Employee_tracker# Employee-Traker
This application allows you to create,manage and update employees.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description

This application allows you to create,manage and update employees.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone git@github.com:JaBujan/Employee_tracker.git

2. **Install Dependencies:**

    npm install

### Database Setup

1. **Configure PostgreSQL:**
    - Create a new PostgreSQL database (for example, departments_db).
    - Update the connection details in the connection.ts file with your PostgreSQL credentials.

2. **Seed the Database:**
    - A seeds.sql file is provided to create the necessary tables and populate sample data. The schema includes:
        - department table with columns: id, name
        - role table with columns: id, title, salary, department (a foreign key referencing department.id)
        - employee table with columns: id, first_name, last_name, role_id, manager_id

Run the following command (replace your_pg_username with your PostgreSQL username):

    psql -U your_pg_username -d employee_db -f seeds.sql


## Contributing

Contributions are welcome! If you find a bug or have an enhancement idea, please open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch (git checkout -b feature/YourFeature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Open a pull request.

## Tests

Please refer to the linked video: 

## License

This project is licensed under the MIT License.

## Questions

If you have any questions, please reach out to me at: javierbcardenas97@gmail.com or visit my GitHub profile: https://github.com/JaBujan