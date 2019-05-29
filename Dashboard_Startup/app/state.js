define(require => { 
    const getNode = node => document.querySelector(`#${node}`);

    return {
        targetCity: () => getNode('cityNode').value
    }
});