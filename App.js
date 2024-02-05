const root = ReactDOM.createRoot(document.getElementById("root"));

const tags = React.createElement("div",{Id:"parent"},React.createElement("div",{id:"subparent"},[
    React.createElement("div",{id:"child1"},[React.createElement("h1",{},"hello wrold"), React.createElement("h2",{},"hii")]),
    React.createElement("div",{id:"child2"},[React.createElement("h1",{},"hello wrold 2"),React.createElement("h2",{},"hi 2")])

]))

root.render(tags);