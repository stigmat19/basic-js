module.exports = function createDreamTeam(members) {

    let res = '';

    let clearMembers = [];

    if(Array.isArray(members)){
        for (let i = 0; i < members.length; i++){
            if(typeof members[i] === 'string'){
                clearMembers.push(members[i].trim());
            }
            else{
                continue;
            }
        }

        for(let i = 0; i < clearMembers.length; i++) {
            res += clearMembers[i][0].toUpperCase()
        }

        return res.split('').sort().join('');
    }
    else{
        return false;
    }


};