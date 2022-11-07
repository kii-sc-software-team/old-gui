import axios from 'axios';

import React from 'react';

class FileUpload_2 extends React.Component {

    // constructor(props) {
    //     super();
    //     this.state = {
    //         // data: props.data,
    //         selectedFile: null,
    //         json_data: null,
    //         string_data: "None"
    //     }
    // }

	state = {

        // Initially, no file is selected
        selectedFile: null,
        json_data: null,
        string_data: "None",
        data_type: "",
        show_data: false
    };
    handleInputChange = this.handleInputChange.bind(this);


    handleInputChange(event) {
        const target = event.target;
        // console.log(this.state.target.checked);
        console.log(event.target.value, 'Checked input');
        const value = target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
        console.log(this.state);
    }


    logFile  = event => {
        console.log('Logging data');
        let str = event.target.result;
        let json = JSON.parse(str);
        console.log('string', str);
        console.log('json', json);

        this.setState({
            string_data: str,
            json_data: json
        })
    }
    
    // On file select (from the pop up)
    onFileChange = event => {
        
        // Update the state
        this.setState({ 
            selectedFile: event.target.files[0],
            show_data: true 
        });
        let file = document.querySelector('#file');



        // Create a new FileReader() object
        let reader = new FileReader();
    
        // Setup the callback event to run when the file is read
        reader.onload = this.logFile;
    
        // Read the file
        reader.readAsText(file.files[0]);
	
	};
	
	// On file upload (click the upload button)
	onFileUpload = e => {
        e.preventDefault();
                
        // Details of the uploaded file
        console.log("details", this.state.selectedFile);

        // let file = this.state.selectedFile;

        // let file = document.querySelector('#file');



        // // Create a new FileReader() object
        // let reader = new FileReader();
    
        // // Setup the callback event to run when the file is read
        // reader.onload = this.logFile;
    
        // // Read the file
        // reader.readAsText(file.files[0]);


        // Request made to the backend api
        // Send formData object
        let query = `http://127.0.0.1:5000/gen2/${this.state.data_type}/test_file`;
        console.log(query);
        axios.post(query, this.state.json_data, { 
            headers: {  
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }});

        this.setState({ 
            show_data: false 
        });
	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
        if (this.state.selectedFile) {
            
            return (
            <div>
                <h2>File Details:</h2>
                
                <p>File Name: {this.state.selectedFile.name}</p>

                            
                <p>File Type: {this.state.selectedFile.type}</p>

                <p>File as String: {this.state.show_data === true && this.state.string_data}</p>

                            
                <p>
                Last Modified:{" "}
                {this.state.selectedFile.lastModifiedDate.toDateString()}
                </p>

            </div>
            );
        } else {
            return (
            <div>
                <br />
                <h5>Choose before Pressing the Upload button</h5>
            </div>
            );
        }
	};
	
	render() {
	
	return (
		<div>
			<h6>
			Load from File
			</h6>
			<div>
				<input type="file" id="file" onChange={this.onFileChange} />
                <select style={{width: "150px", float: "right"}} class="form-select" name="data_type" aria-label="Default select example"  onChange={this.handleInputChange}>
                    <option selected>Select Data Type</option>
                    <option value="phases">Phases</option>
                    <option value="var_settings">Variable Settings</option>
                </select>
				<button onClick={this.onFileUpload}>
				Upload!
				</button>
			</div>
		{this.fileData()}
		</div>
	);
	}
}

export default FileUpload_2;
