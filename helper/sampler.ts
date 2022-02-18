import {shuffle} from 'lodash';


export const yoshi_sampler = ( num: number ) => {
    const yoshis: string[] = [...Array(num)].map((_,i) => {
        return `/sample/yosh_${i%3+1}.jpg`
    });
    return shuffle(yoshis);
}