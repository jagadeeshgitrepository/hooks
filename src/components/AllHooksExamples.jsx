import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";

const AllHooksExamples = () => {
  // useState

  const [personDetails, setPersonDetails] = useState({
    username: "jagu",
    location: "mylavaram",
  });
  const [switchToggle, setSwitchToggle] = useState("ON");

  //useEffect

  useEffect(() => {
    console.log("called for every render");
  });

  //useEffect(()=>{},[]) i.e., (componentDIdMount in class)
  useEffect(() => {
    console.log("called for first render i.e., when component mounts");
  }, []);

  //useEffect(()=>{},[dependencies i.e., parent props or current state])
  // i.e., (componentDIdUpdate in class)
  useEffect(() => {
    console.log(
      "switchToggle=",
      switchToggle,
      "called when dependencies changes i.e., when child need to re-render when parent state changes then pass props to child and add it to dependencies array"
    );
  }, [switchToggle]);

  //useEffect(()=>{return ()=>{}},[]) (componentWillUnmount in class)
  useEffect(() => {
    return () => {
      console.log("component unmounted");
    };
  }, []);

  //useEffect(()=>{...componentDidMount logic.... return ()=>{}},[]) i.e., (componentDidMount + componentWillUnmount in class)
  // componentWillUnmount i.e., return logic will be executed when component unmount.
  useEffect(() => {
    console.log(
      "combing componentDidMount + componentWillUnmount=>",
      "component mounted"
    );
    return () => {
      console.log(
        "combing componentDidMount + componentWillUnmount=>",
        "component unmounted"
      );
    };
  }, []);

  //useEffect(()=>{...componentDidUpdate logic.... return ()=>{}},[]) i.e., (componentDidMount + componentWillUnmount in class)
  // componentWillUnmount i.e., return logic will be executed when component unmount and also when props,state value changes
  useEffect(() => {
    console.log(
      "combing componentDidUpdate + componentWillUnmount=>",
      "switchToggle=",
      switchToggle
    );
    return () => {
      console.log(
        "combing componentDidUpdate + componentWillUnmount=>",
        "component unmounted"
      );
    };
  }, [switchToggle]);

  //useEffect(()=>{...render every time logic.... return ()=>{}},[]) i.e., (componentWillUnmount + render every time )
  // componentWillUnmount i.e., return logic will be executed when component unmount and also for each render.
  useEffect(() => {
    console.log(
      "combing render every time logic + componentWillUnmount=>",
      "switchToggle=",
      switchToggle
    );
    return () => {
      console.log(
        "combing render every time logic + componentWillUnmount=>",
        "component unmounted"
      );
    };
  });

  //useMemo(()=>return value,[dependencies for calculating value])

  //1 ) value from complex operations.
  //2 ) when variable don't need to execute with initial value on rendering.
  // Now Example on case 1 :  Value from complex operations.
  const [a, setAValue] = useState(1);
  const [b, setBValue] = useState(1);

  function sum(a, b) {
    for (var i = 0; i < 100000000; i++) {}
    // with out using useMemo , must wait till for loop completes its execution.when using useMemo here data stores in cache so user can't see any delay  in seeing result in  UI
    return parseInt(a) + parseInt(b);
  }

  const sumUseMemoResult = useMemo(() => {
    return sum(a, b);
  }, [a, b]);

  const getUseCallBackSum = useCallback(() => {
    return sum(a, b);
  }, [a, b]);

  //useLayoutEffect()

  //used to load data before rendering and then renders the ui.
  useLayoutEffect(() => {
    console.log("useLayOut executed first time before rendering UI");
  }, []);

  //useRef
  const input1 = useRef();

  return (
    <div>
      <ul>
        <li>useState</li>
        <li>useEffect</li>
        <li>useContext</li>
        <li>custom Hook</li>
        <li>useLayOut</li>
        <li>useMemo</li>
        <li>useCallback</li>
      </ul>
      <h1>UseState:{JSON.stringify(personDetails)}</h1>
      <button onClick={() => setPersonDetails({ name: "jagu" })}>
        change state
      </button>
      <h1>
        useState can't persists its previous data , user must explicitly take
        care of those data:{JSON.stringify(personDetails)}
      </h1>
      <h1>useMemo</h1>
      <input
        type="number"
        ref={input1}
        value={a}
        onChange={e => setAValue(e.target.value)}
      />
      <input
        type="number"
        value={b}
        onChange={e => setBValue(e.target.value)}
      />

      <h2>Sum use memo</h2>
      <div>{sumUseMemoResult}</div>

      <h2>Sum use callback</h2>
      <div>{getUseCallBackSum()}</div>

      <h1>Refs</h1>
      <button type="button" onClick={() => input1.current.focus()}>
        ....Focus input element on Clicking...
      </button>

      <h1> ...... please see console data for remaining things .....</h1>
    </div>
  );
};

export default AllHooksExamples;
