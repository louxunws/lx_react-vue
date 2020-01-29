let configData = function (){
    console.log(this, 'this')
    return [
        {
            type: 'select',
            fn: () => {
                this.selectOnchange()
            }
        },
        {
            type: 'input',
            fn: () => {
                this.inputOnchange()
            }
        },
        {
            type: 'input',
            fn: () => {
                this.inputOnchange()
            }
        },
        {
            type: 'custom'
        }
    ]
}

export default configData