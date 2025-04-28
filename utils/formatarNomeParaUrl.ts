export function formatarNomeParaUrl(nome: string) {
    return nome
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase();
}