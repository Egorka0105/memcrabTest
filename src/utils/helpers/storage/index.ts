export class storage {
  private static storage: Storage = window.localStorage;

  public static getItem(key: string): any {
    const data = this.storage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public static setItem(key: string, data: unknown): void {
    const serializedData = typeof data === 'string' ? data : JSON.stringify(data);
    this.storage.setItem(key, serializedData);
  }
}
