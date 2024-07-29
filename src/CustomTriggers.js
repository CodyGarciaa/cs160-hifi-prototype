import React from 'react';

export default function FeedbackMessage() {
    return (
        <>
            <h1>
                Custom Triggers
            </h1>
            <ul className='trigger-list'>
                <li>
                    <label>
                        Holes/small patterns
                    </label>
                    <button>
                        🖊️
                    </button>
                </li>
            </ul>
            <button>
                + New Trigger
            </button>
        </>
    );
}