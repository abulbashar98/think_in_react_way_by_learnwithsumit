

class Context {

    constructor(value = null) {
        this.value = value
    }

    // Creating Provider Component
    Provider = ({ children, value }) => {
        this.value = value;
        return children
    }

    // Creating Consumer Component
    Consumer = ({ children }) => children(this.value)

}

function createContext(value = null) {

    const context = new Context(value);

    return {

        Provider: context.Provider,
        Consumer: context.Consumer,

    }

}

export default createContext;