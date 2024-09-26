const { exec } = require('child_process');

const installDocker = () => {
    console.log("Starting Docker installation...");

    // Command to update packages and install Docker in a Unix environment
    const commands = `
        sudo apt-get update &&
        sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common &&
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - &&
        sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" &&
        sudo apt-get update &&
        sudo apt-get install -y docker-ce &&
        sudo systemctl start docker &&
        sudo systemctl enable docker
    `;

    exec(commands, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error during installation: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log("Docker installation completed successfully.");
    });
};

// Run the function
installDocker();