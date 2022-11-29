import React from 'react';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import ThemeContext from '../Contexts/themeContext';

export default class Content extends React.Component {

    componentDidMount() {
        console.log(this.context)
    }


    render() {

        const { theme, switchTheme } = this.context;

        return (
            <div>
                <h1>This is a Content</h1>
                <Counter>
                    {(count, incrementCount) =>
                        <HoverCounter
                            theme={theme}
                            switchTheme={switchTheme}
                            count={count}
                            incrementCount={incrementCount}
                        />
                    }
                </Counter>
            </div>
        );
    }
};

Content.contextType = ThemeContext;

