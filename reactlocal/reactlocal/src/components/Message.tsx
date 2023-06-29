const Text= (props: {content: string}) => {
    const{ content } = props
    return <p className="text">{content}</p>
}

const Message = (props:{}) => {
    const content1 = 'This is parent compornent'
    const content2 = 'Message uses Text comportnent'
    const content3 = 'hello my name is rintaro fujita'
    const content4 = 'hello my name is matsumura shin'

    return(
        <div>
            <Text content={content1}/>
            <Text content={content2}/>
            <Text content = {content3}/>
            <Text content = {content4}/>
        </div>
    )
}

export default Message