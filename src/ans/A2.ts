class TwoFer {
    public static twoFer(name?: string): string {
        // Code here ! 從這裡開始
        if (name) {
            name = name[0].toUpperCase() + name.slice(1);
        }

        return `One for ${name ?? 'you'}, one for me.`;
    }
}