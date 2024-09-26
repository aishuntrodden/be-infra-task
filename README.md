# be-infra-task
Docker setup for database(postgres) and services deployment
# Install docker if not install by running command 'node docker_install.js' in root directory.
# Run command 'docker-compose up' it will start the containers with postgres database server up and running and all api's up and running 
# As rimraf module was missing in all 3 api's , I have added command in DockerFile to install the module in all three of them seperately so nobody has to make change by going in each and running .
