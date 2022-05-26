export const compose = (...fns: any) =>
    (...args: any) => fns.reduce((res: any, fn: any) => [fn.call(null, ...res)], args)[0];