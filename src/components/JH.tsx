import { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';

const JH = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        const processedUsers = _.map(response.data, user => ({
          ...user,
          name: _.toUpper(user.name),
        }));
        setUsers(processedUsers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
      <div>
        <h3>지혜님</h3>
        {users.length > 0 ? (
            <ul>
              {users.map(user => (
                  <li key={user.id}>{user.name}</li>
              ))}
            </ul>
        ) : (
            <p>No users found</p>
        )}
      </div>
  );
};

export default JH;
