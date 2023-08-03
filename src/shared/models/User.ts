export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  days?: any[];
  nutrition?: any;
  createdAt: Date;
  updatedAt: Date;
}
