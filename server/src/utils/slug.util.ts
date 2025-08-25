export class SlugUtil {
  slugify(text: string): string {
    return text
      .toString()
      .normalize('NFKD')
      .replace(/[\u0300-\u036F]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  slugWithId(text: string, id: string): string {
    return `${this.slugify(text)}_${id}`;
  }
}
