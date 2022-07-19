function CheckPalindrome(props) {
    const word = props.value
    
    const renderOutput = () => {
        if(Number.isInteger(word)){
            word = word.toString()
        }
        let regex = /[^A-Za-z0-9]/g;
        let result = word.replace(regex, "")
        if(result.toLowerCase() === result.split('').reverse().join('').toLowerCase()){
            return `${word} is a Palindrome`;
        }
        return `${word} is NOT a Palindrome`;
    }
    

    return (
        <div>
            <p>{renderOutput()}</p>
        </div>
    )
}

export default CheckPalindrome