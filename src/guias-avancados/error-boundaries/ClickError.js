export default class ClickError extends Error {
  constructor(message) {
    super(message);

    this.message = message;
    this.name = 'ClickError';
  }
}