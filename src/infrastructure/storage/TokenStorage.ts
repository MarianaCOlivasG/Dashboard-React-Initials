export class TokenStorage {
    private static readonly TOKEN_KEY = 'accessToken';
    private static readonly USER_KEY = 'user';
  
    static saveToken(token: string): void {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  
    static getToken(): string | null {
      return localStorage.getItem(this.TOKEN_KEY);
    }
  
    static removeToken(): void {
      localStorage.removeItem(this.TOKEN_KEY);
    }
  
    static saveUser(user: any): void {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
  
    static getUser(): any | null {
      const user = localStorage.getItem(this.USER_KEY);
      return user ? JSON.parse(user) : null;
    }
  
    static removeUser(): void {
      localStorage.removeItem(this.USER_KEY);
    }
  
    static clear(): void {
      this.removeToken();
      this.removeUser();
    }
  
    static hasToken(): boolean {
      return !!this.getToken();
    }
  }