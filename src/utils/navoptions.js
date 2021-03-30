//@flow 
// ! The values in this array are used to populate the main navigation options
// ! in `<Header>` 

export interface Navoption{
    path: string,
    markdownVal: string
}

export const navoptions : Navoption[] = [
    {path: '/', markdownVal: 'about'},
    {path: '/move', markdownVal: 'move'},
    {path: '/litter', markdownVal: 'litter'}
];

