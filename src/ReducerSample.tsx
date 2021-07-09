import React, { useReducer } from "react";

type Color = 'red' | 'orange' | 'yellow';

type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
};

type Action =   
    | { type: 'SET_COUNT';  count: number }
    | { type: 'SET_TEXT';  text: string }
    | { type: 'SET_COLOR';  color: Color }
    | { type: 'TOGGLE_GOD' };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        switch (action.type) {
            case 'SET_COUNT': 
                return {
                    ...state,
                    count: action.count // count가 자동 완성되며, number type
                };
            case 'SET_TEXT':
                return {
                    ...state,
                    text: action.text // text가 자동완성되며, string 타입
                };
            // case 'SET_COLOR':

        }
    }
}