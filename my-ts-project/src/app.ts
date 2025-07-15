import { capitalize, UserProfile } from "./utils";

const name : string = "typescript";
console.log(`Learning ${capitalize(name)}`);

const user: UserProfile = {
    id: 1,
    username: "typescript_dev",
    email: "dev@example.com",
    isActive: true
} 

console.log (`User: ${user.username} (${user.email}) is ${user.isActive ? 'active' : 'inactive'}`);