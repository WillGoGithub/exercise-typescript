
class Acronym {
    public static parse(phrase: string): string {
        const match = phrase.match(/[A-Z]+[a-z]*|[a-z]+/g);

        if (match) {
            return match.reduce((acronym: string, word: string) =>
                acronym + word[0].toUpperCase(), '');
        }

        return '';
    }
}
