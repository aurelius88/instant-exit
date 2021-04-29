module.exports.NetworkMod = function InstantExit( mod ) {

    mod.hook( "S_PREPARE_EXIT", 1, () => {
        mod.toClient( "S_EXIT", 3, { category: 0, code: 0 });
    });
};
