import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef()
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (symbol) str += "!@#$%^&*()_+=-{}[]|\\:;\"'<>,.?/~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char);
      
    }

    setPassword(pass);
    
  }, [length, number, symbol, setPassword]);
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
    
  }, [length, number, symbol, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md shadow-md rounded-lg mx-auto px-4 my-8 text-orange-500 bg-gray-700 overflow-hidden'>
        <h1 className='text-white text-center pt-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-6 mt-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly={true}
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-1'>
          <div className='flex text-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer outline-none'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>length: {length}</label>
          </div>
          <div className='flex text-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={number}
              onChange={() => setNumber((prev) => !prev)}
              className='outline-none'
              id='number'
            />
            <label htmlFor="number">Number</label>
          </div>
          <div className='flex text-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={symbol}
              onChange={() => setSymbol((prev) => !prev)}
              className='outline-none'
              id='symbol'
            />
            <label htmlFor="symbol">Charactors</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
