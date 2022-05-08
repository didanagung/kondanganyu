import React from "react";

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <>
                <h1 className='text-center font-peg text-5xl font-semibold m-5'>Kirim Ucapan dan Do'a Restu</h1>
                <div className="font-tape">
                    <label htmlFor="nama">Nama Anda : 
                        <input type="text" value={this.state.value} onChange={this.handleChange} id='nama' className='mb-2 w-full rounded active:ring-0' required/>
                    </label>
                    {/* <label htmlFor="ucapan">Ucapan : 
                        <textarea name="" id="ucapan" cols="60" rows="4" className='w-full rounded' required></textarea>
                    </label>
                    <label htmlFor="kehadiran"> Konfirmasi kehadiran : 
                        <select name="keha" id="kehadiran" className='w-full'>
                            <option value="hadir">Hadir</option>
                            <option value="Tidak Hadir">Tidak Hadir</option>
                        </select>
                    </label> */}
                    <button className='bg-emerald-500 p-2 rounded-full mt-4 text-white hover:bg-emerald-700 block mx-auto' type="submit" value="Submit">Kirim</button>
                </div>
            </>
        </form>
      );
    }
  }

  export default Form;