export interface userData {
  id: number;
  username: string;
  email: string;
  roles: [
    {
      id: number;
      roleName: string;
    }
  ];
  accessToken: string;
  tokenType: string;
}
