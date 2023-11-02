var searchIndex = JSON.parse('{\
"client":{"doc":"","t":"DLLLMLLLFMLLFMMMLLMLML","n":["Opt","borrow","borrow_mut","clap","curve","fmt","from","from_clap","hash_or_randomize_secret","host","into","into_request","main","modp","port","secret","try_from","try_into","type","type_id","user","vzip"],"q":[[0,"client"]],"d":["Command-line options structure for the ZKPass client.","","","","Elliptic curve type for the Elliptic Curve implementation …","","Returns the argument unchanged.","","Hashes the provided secret string or generates a random …","The host address of the ZKPass server.","Calls <code>U::from(self)</code>.","","Main entry point for the ZKPass client.","Type of RFC log group to use for the Discrete Log …","The port number to connect to the ZKPass server.","Optional secret passcode for authentication.","","","Underlying type of the Chaum-Pedersen protocol to use.","","Username for identification.",""],"i":[0,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,2,2,2,2],"f":[0,[[]],[[]],[[],1],0,[[2,3],4],[[]],[5,2],[[[7,[6]]],[[0,[[8,[[0,[[8,[[0,[[8,[[0,[[8,[[0,[8,9]]]],[9,[[0,[8,9]]]]]]]],[9,[[0,[[8,[[0,[8,9]]]],[9,[[0,[8,9]]]]]]]]]]]],[9,[[0,[[8,[[0,[[8,[[0,[8,9]]]],[9,[[0,[8,9]]]]]]]],[9,[[0,[[8,[[0,[8,9]]]],[9,[[0,[8,9]]]]]]]]]]]]]]]],[9,[[0,[[8,[[0,[[8,[[0,[[8,[[0,[8,9]]]],[9,[[0,[8,9]]]]]]]],[9,[[0,[[8,[[0,[8,9]]]],[9,[[0,[8,9]]]]]]]]]]]],[9,[[0,[[8,[[0,[[8,[[0,[8,9]]]],[9,[[0,[8,9]]]]]]]],[9,[[0,[[8,[[0,[8,9]]]],[9,[[0,[8,9]]]]]]]]]]]]]]]]]]]],0,[[]],[[],10],[[],[[13,[[12,[11]]]]]],0,0,0,[[],13],[[],13],0,[[],14],0,[[]]],"c":[],"p":[[3,"App"],[3,"Opt"],[3,"Formatter"],[6,"Result"],[3,"ArgMatches"],[3,"String"],[4,"Option"],[8,"ByteConvertible"],[8,"RandomGenerator"],[3,"Request"],[8,"Error"],[3,"Box"],[4,"Result"],[3,"TypeId"]]},\
"server":{"doc":"","t":"DLLLMLLLMLLFMMLLMLL","n":["Opt","borrow","borrow_mut","clap","curve","fmt","from","from_clap","host","into","into_request","main","modp","port","try_from","try_into","type","type_id","vzip"],"q":[[0,"server"]],"d":["Struct representing command line options for the server.","","","","Command line option to set the elliptic curve type. …","","Returns the argument unchanged.","","Command line option to set the host address for the server.","Calls <code>U::from(self)</code>.","","Main entry point for the ZKPass Chaum-Pedersen protocol …","Command line option to set the type of the RFC log group …","Command line option to set the port for the server. …","","","Command line option to set the underlying type of the …","",""],"i":[0,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2],"f":[0,[[]],[[]],[[],1],0,[[2,3],4],[[]],[5,2],0,[[]],[[],6],[[],[[9,[[8,[7]]]]]],0,0,[[],9],[[],9],0,[[],10],[[]]],"c":[],"p":[[3,"App"],[3,"Opt"],[3,"Formatter"],[6,"Result"],[3,"ArgMatches"],[3,"Request"],[8,"Error"],[3,"Box"],[4,"Result"],[3,"TypeId"]]},\
"zk_pass":{"doc":"Chaum-Pedersen Zero-Knowledge Interactive Proof …","t":"AAAAAAQIQQQDQQLLKKLLKAAALLLLLMMLLMMALLLLKLDDDDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLDLLLLLLLLLLLLLDLLLLLLLLLLLLLLLLLFDLLLLFLLLLLLLLLADDDDDDAMMALLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMMMMLLLLLLLLLLLLLLLLLLLLLLLLMMLLLLLLMMDLLLLLLLLLLLLLLLLLLLLLLLLLIDLLLLLLLKLLLLLLLLLLLLKLLLLLKLLENNNENNNELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLIKKIKDLLLLLLLLLLLLLLADDDDDDAMMALLLLLLLLLLLLMLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLMMMMLLLLLLLLLLLLLLLLLLLLLLLLMMLLLLLLMMDLLLLLLLLLLLLLLLLLLLLLLLLLIDLLLLLLLKLLLLLLLLLLLLKLLLLLKLL","n":["chaum_pedersen","client","cmdutil","conversion","rand","service","Challenge","ChaumPedersen","CommitParameters","CommitmentRandom","GroupParameters","GroupParams","Response","Secret","borrow","borrow_mut","challenge","challenge_response","clone","clone_into","commitment","constants","curve25519","discretelog","fmt","from","from_ref","from_str","from_str","g","h","into","into_request","p","q","test","to_owned","try_from","try_into","type_id","verify","vzip","EC25519_GROUP_PARAMS","RFC5114_MODP_1024_160_BIT_PARAMS","RFC5114_MODP_2048_224_BIT_PARAMS","RFC5114_MODP_2048_256_BIT_PARAMS","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","deref","deref","deref","deref","from","from","from","from","into","into","into","into","into_request","into_request","into_request","into_request","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","vzip","vzip","vzip","vzip","EllipticCurveChaumPedersen","borrow","borrow_mut","challenge","challenge_response","commitment","from","into","into_request","try_from","try_into","type_id","verify","vzip","DiscreteLogChaumPedersen","borrow","borrow_mut","challenge","challenge_response","clone","clone_into","commitment","from","from_ref","into","into_request","to_owned","try_from","try_into","type_id","verify","vzip","test_execute_protocol","AuthClientLib","borrow","borrow_mut","connect","create_authentication_challenge","execute_protocol","from","into","into_request","register","try_from","try_into","type_id","verify_authentication","vzip","zkp_auth","AuthenticationAnswerRequest","AuthenticationAnswerResponse","AuthenticationChallengeRequest","AuthenticationChallengeResponse","RegisterRequest","RegisterResponse","auth_client","auth_id","auth_id","auth_server","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","c","clear","clear","clear","clear","clear","clear","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","default","default","default","default","default","default","encoded_len","encoded_len","encoded_len","encoded_len","encoded_len","encoded_len","eq","eq","eq","eq","eq","eq","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from_ref","from_ref","from_ref","from_ref","from_ref","from_ref","into","into","into","into","into","into","into_request","into_request","into_request","into_request","into_request","into_request","r1","r2","s","session_id","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","user","user","vzip","vzip","vzip","vzip","vzip","vzip","y1","y2","AuthClient","accept_compressed","borrow","borrow_mut","clone","clone_into","connect","create_authentication_challenge","fmt","from","from_ref","into","into_request","max_decoding_message_size","max_encoding_message_size","new","register","send_compressed","to_owned","try_from","try_into","type_id","verify_authentication","vzip","with_interceptor","with_origin","Auth","AuthServer","accept_compressed","borrow","borrow_mut","call","call","clone","clone_into","create_authentication_challenge","fmt","from","from_arc","from_ref","into","into_make_service","into_request","max_decoding_message_size","max_encoding_message_size","new","poll_ready","poll_ready","register","send_compressed","to_owned","try_from","try_into","type_id","verify_authentication","vzip","with_interceptor","ChaumPedersenType","DiscreteLog","Ec25519","EllipticCurve","EllipticCurveType","Rfc5114Modp_1024_160","Rfc5114Modp_2048_224","Rfc5114Modp_2048_256","RfcModpType","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","eq","eq","eq","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from_str","from_str","from_str","into","into","into","into_request","into_request","into_request","to_string","to_string","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","vzip","vzip","vzip","ByteConvertible","from_bytes","to_bytes","RandomGenerator","generate_random","ZkAuth","borrow","borrow_mut","create_authentication_challenge","from","into","into_request","new_discrete_log_chaum_pedersen","new_elliptic_curve_chaum_pedersen","register","try_from","try_into","type_id","verify_authentication","vzip","zkp_auth","AuthenticationAnswerRequest","AuthenticationAnswerResponse","AuthenticationChallengeRequest","AuthenticationChallengeResponse","RegisterRequest","RegisterResponse","auth_client","auth_id","auth_id","auth_server","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","c","clear","clear","clear","clear","clear","clear","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","default","default","default","default","default","default","encoded_len","encoded_len","encoded_len","encoded_len","encoded_len","encoded_len","eq","eq","eq","eq","eq","eq","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from_ref","from_ref","from_ref","from_ref","from_ref","from_ref","into","into","into","into","into","into","into_request","into_request","into_request","into_request","into_request","into_request","r1","r2","s","session_id","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","user","user","vzip","vzip","vzip","vzip","vzip","vzip","y1","y2","AuthClient","accept_compressed","borrow","borrow_mut","clone","clone_into","connect","create_authentication_challenge","fmt","from","from_ref","into","into_request","max_decoding_message_size","max_encoding_message_size","new","register","send_compressed","to_owned","try_from","try_into","type_id","verify_authentication","vzip","with_interceptor","with_origin","Auth","AuthServer","accept_compressed","borrow","borrow_mut","call","call","clone","clone_into","create_authentication_challenge","fmt","from","from_arc","from_ref","into","into_make_service","into_request","max_decoding_message_size","max_encoding_message_size","new","poll_ready","poll_ready","register","send_compressed","to_owned","try_from","try_into","type_id","verify_authentication","vzip","with_interceptor"],"q":[[0,"zk_pass"],[6,"zk_pass::chaum_pedersen"],[42,"zk_pass::chaum_pedersen::constants"],[86,"zk_pass::chaum_pedersen::curve25519"],[100,"zk_pass::chaum_pedersen::discretelog"],[118,"zk_pass::chaum_pedersen::test"],[119,"zk_pass::client"],[135,"zk_pass::client::zkp_auth"],[262,"zk_pass::client::zkp_auth::auth_client"],[288,"zk_pass::client::zkp_auth::auth_server"],[319,"zk_pass::cmdutil"],[373,"zk_pass::conversion"],[376,"zk_pass::rand"],[378,"zk_pass::service"],[394,"zk_pass::service::zkp_auth"],[521,"zk_pass::service::zkp_auth::auth_client"],[547,"zk_pass::service::zkp_auth::auth_server"]],"d":["Implements the Chaum-Pedersen zero-knowledge proof …","Handles client-side operations and interactions.","Utilities for command line argument parsing and handling.","Functions for type conversions and data formatting.","Cryptographically secure random number generation …","Core services and business logic implementation.","The type representing the challenge in the protocol.","A trait defining the interface for the Chaum-Pedersen …","The type representing the commitment parameters in the …","The type representing the commitment randomness in the …","The type representing the group parameters used in the …","A struct representing group parameters in cryptographic …","The type representing the response in the protocol.","The type representing the secret to be proven.","","","Generates a challenge in the Chaum-Pedersen protocol.","Calculates the challenge response in the Chaum-Pedersen …","","","Calculates the commitment in the Chaum-Pedersen protocol.","This module defines various constants used throughout the …","This module provides functionality related to the …","This module focuses on the discrete logarithm problem and …","","Returns the argument unchanged.","","","","The generator <code>g</code> of the group.","An additional generator <code>h</code> of the group, ensuring it’s …","Calls <code>U::from(self)</code>.","","The prime modulus <code>p</code> defining the size of the group.","The order <code>q</code> of the subgroup generated by <code>g</code> and <code>h</code>.","A module dedicated to testing various components of the …","","","","","Verifies the response in the Chaum-Pedersen protocol.","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","A struct representing the Chaum-Pedersen protocol …","","","Generate a random challenge for the Chaum-Pedersen …","Calculate the response for the Chaum-Pedersen protocol.","Calculate the commitment values for the Chaum-Pedersen …","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","Verify the response for the Chaum-Pedersen protocol.","","A struct representing the Chaum-Pedersen protocol …","","","Generates a random challenge for the protocol within the …","Generates a random challenge for the protocol within the …","","","Calculates the commitment for the given secret <code>x</code> using the …","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","","","","","Verifies the response against the given commitment, …","","Executes the Chaum-Pedersen protocol using a generic …","A client library for interacting with the ZKP …","","","Connects to the ZKP authentication service.","Creates an authentication challenge for a user.","Executes the Chaum-Pedersen protocol for client …","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","Registers a new user with the ZKP authentication service.","","","","Verifies an authentication challenge for a user.","","A module that contains the auto-generated gRPC code for …","","","","","","","Generated client implementations.","","","Generated server implementations.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Enable decompressing responses.","","","","","Attempt to create a new client by connecting to a given …","","","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","Limits the maximum size of a decoded message.","Limits the maximum size of an encoded message.","","","Compress requests with the given encoding.","","","","","","","","","Generated trait containing gRPC methods that should be …","","Enable decompressing requests with the given encoding.","","","","","","","","","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","","","Limits the maximum size of a decoded message.","Limits the maximum size of an encoded message.","","","","","Compress responses with the given encoding, if the client …","","","","","","","","An enumeration representing the types of Chaum-Pedersen …","","","","An enumeration representing the types of elliptic curves.","","","","An enumeration representing the types of RFC MODP groups.","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","A trait for converting types to and from byte …","Constructs an object from a byte array.","Converts the provided object to a byte array.","Defines a trait for generating random values of a given …","Generates a random value of type <code>T</code>.","A struct representing the zero-knowledge authentication …","","","","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","Creates a new instance of <code>ZkAuth</code> using the Discrete Log …","Creates a new instance of <code>ZkAuth</code> using the Elliptic Curve …","","","","","","","","","","","","","","Generated client implementations.","","","Generated server implementations.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Enable decompressing responses.","","","","","Attempt to create a new client by connecting to a given …","","","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","Limits the maximum size of a decoded message.","Limits the maximum size of an encoded message.","","","Compress requests with the given encoding.","","","","","","","","","Generated trait containing gRPC methods that should be …","","Enable decompressing requests with the given encoding.","","","","","","","","","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","","","Limits the maximum size of a decoded message.","Limits the maximum size of an encoded message.","","","","","Compress responses with the given encoding, if the client …","","","","","","",""],"i":[0,0,0,0,0,0,64,0,64,64,64,0,64,64,2,2,64,64,2,2,64,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,64,2,0,0,0,0,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,13,14,15,16,0,68,68,68,68,68,68,68,68,68,68,68,68,68,0,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,0,0,20,20,20,20,0,20,20,20,20,20,20,20,20,20,0,0,0,0,0,0,0,0,33,34,0,30,31,32,33,34,35,30,31,32,33,34,35,33,30,31,32,33,34,35,30,31,32,33,34,35,30,31,32,33,34,35,30,31,32,33,34,35,30,31,32,33,34,35,30,31,32,33,34,35,30,31,32,33,34,35,30,31,32,33,34,35,30,31,32,33,34,35,30,31,32,33,34,35,30,31,32,33,34,35,32,32,34,35,30,31,32,33,34,35,30,31,32,33,34,35,30,31,32,33,34,35,30,31,32,33,34,35,30,32,30,31,32,33,34,35,30,30,0,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,0,0,50,50,50,50,50,50,50,49,50,50,50,50,50,50,50,50,50,50,50,50,49,50,50,50,50,50,49,50,50,0,60,61,60,0,59,59,59,0,59,60,61,59,60,61,59,60,61,59,59,60,60,61,61,59,60,61,59,60,61,59,60,61,59,60,61,59,60,61,59,59,60,60,61,61,59,60,61,59,60,61,59,60,61,0,26,26,0,27,0,66,66,66,66,66,66,66,66,66,66,66,66,66,66,0,0,0,0,0,0,0,0,73,71,0,70,72,67,73,71,74,70,72,67,73,71,74,73,70,72,67,73,71,74,70,72,67,73,71,74,70,72,67,73,71,74,70,72,67,73,71,74,70,72,67,73,71,74,70,72,67,73,71,74,70,72,67,73,71,74,70,72,67,73,71,74,70,72,67,73,71,74,70,72,67,73,71,74,70,72,67,73,71,74,67,67,71,74,70,72,67,73,71,74,70,72,67,73,71,74,70,72,67,73,71,74,70,72,67,73,71,74,70,67,70,72,67,73,71,74,70,70,0,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,0,0,77,77,77,77,77,77,77,76,77,77,77,77,77,77,77,77,77,77,77,77,76,77,77,77,77,77,76,77,77],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[[2,[1]]],[[2,[1]]]],[[]],[[]],0,0,0,[[[2,[3]],4],5],[[]],[[]],[6,[[8,[[2,[7]]]]]],[6,[[8,[[2,[9]]]]]],0,0,[[]],[[],10],0,0,0,[[]],[[],8],[[],8],[[],11],[[],12],[[]],0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[13,[[2,[7]]]],[14,[[2,[7]]]],[15,[[2,[7]]]],[16,[[2,[9]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],10],[[],10],[[],10],[[],10],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],11],[[],11],[[],11],[[],11],[[]],[[]],[[]],[[]],0,[[]],[[]],[[[2,[9]]]],[[]],[[]],[[]],[[]],[[],10],[[],8],[[],8],[[],11],[[],12],[[]],0,[[]],[[]],[[[2,[7]]],7],[[]],[17,17],[[]],[[]],[[]],[[]],[[]],[[],10],[[]],[[],8],[[],8],[[],11],[[],12],[[]],[[],12],0,[[]],[[]],[[[19,[18]]],[[8,[20,21]]]],[[20,22,[24,[23]],[24,[23]]],[[8,[25]]]],[[[2,[[0,[[26,[[0,[[26,[[0,[[26,[[0,[26,27]]]],[27,[[0,[26,27]]]]]]]],[27,[[0,[[26,[[0,[26,27]]]],[27,[[0,[26,27]]]]]]]]]]]],[27,[[0,[[26,[[0,[[26,[[0,[26,27]]]],[27,[[0,[26,27]]]]]]]],[27,[[0,[[26,[[0,[26,27]]]],[27,[[0,[26,27]]]]]]]]]]]]]]]],22,20],[[8,[[29,[28]]]]]],[[]],[[]],[[],10],[[20,22,[24,[23]],[24,[23]]],[[8,[25]]]],[[],8],[[],8],[[],11],[[20,22,[24,[23]]],[[8,[22,25]]]],[[]],0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,[30],[31],[32],[33],[34],[35],[30,30],[31,31],[32,32],[33,33],[34,34],[35,35],[[]],[[]],[[]],[[]],[[]],[[]],[[],30],[[],31],[[],32],[[],33],[[],34],[[],35],[30,36],[31,36],[32,36],[33,36],[34,36],[35,36],[[30,30],12],[[31,31],12],[[32,32],12],[[33,33],12],[[34,34],12],[[35,35],12],[[30,4],5],[[31,4],5],[[32,4],5],[[33,4],5],[[34,4],5],[[35,4],5],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],0,0,[[]],[[]],[[]],[[]],[[]],[[]],0,0,0,[[[39,[[38,[37]]]],40],[[39,[[38,[37]]]]]],[[]],[[]],[[[39,[1]]],[[39,[1]]]],[[]],[[[19,[18]]],[[8,[[39,[41]],21]]]],[[[39,[[38,[37]]]],[42,[32]]],[[8,[[43,[33]],25]]]],[[[39,[3]],4],5],[[]],[[]],[[]],[[],10],[[[39,[[38,[37]]]],36],[[39,[[38,[37]]]]]],[[[39,[[38,[37]]]],36],[[39,[[38,[37]]]]]],[[[38,[37]]],[[39,[[38,[37]]]]]],[[[39,[[38,[37]]]],[42,[30]]],[[8,[[43,[31]],25]]]],[[[39,[[38,[37]]]],40],[[39,[[38,[37]]]]]],[[]],[[],8],[[],8],[[],11],[[[39,[[38,[37]]]],[42,[34]]],[[8,[[43,[35]],25]]]],[[]],[[[45,[[44,[37]]]],[38,[37]],46],[[39,[[47,[[45,[[44,[37]]]],[38,[37]],46]]]]]],[[[38,[37]],48],[[39,[[38,[37]]]]]],0,0,[[[50,[49]],40],[[50,[49]]]],[[]],[[]],[[[50,[49]],[44,[[0,[51,52]]]]]],[44],[[[50,[49]]],[[50,[49]]]],[[]],[[[10,[32]]],[[54,[[29,[53]]]]]],[[[50,[[0,[3,49]]]],4],5],[[]],[[[55,[49]]],[[50,[49]]]],[[]],[[]],[[],56],[[],10],[[[50,[49]],36],[[50,[49]]]],[[[50,[49]],36],[[50,[49]]]],[49,[[50,[49]]]],[[[50,[49]],57],[[58,[8]]]],[57,[[58,[8]]]],[[[10,[30]]],[[54,[[29,[53]]]]]],[[[50,[49]],40],[[50,[49]]]],[[]],[[],8],[[],8],[[],11],[[[10,[34]]],[[54,[[29,[53]]]]]],[[]],[[49,46],[[47,[[50,[49]],46]]]],0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[59,59],12],[[60,60],12],[[61,61],12],[[59,4],[[8,[62]]]],[[59,4],5],[[60,4],[[8,[62]]]],[[60,4],5],[[61,4],[[8,[62]]]],[[61,4],5],[[]],[[]],[[]],[6,[[8,[59]]]],[6,[[8,[60]]]],[6,[[8,[61]]]],[[]],[[]],[[]],[[],10],[[],10],[[],10],[[],22],[[],22],[[],22],[[],8],[6,[[8,[59]]]],[[],8],[6,[[8,[60]]]],[[],8],[6,[[8,[61]]]],[[],8],[[],8],[[],8],[[],11],[[],11],[[],11],[[]],[[]],[[]],0,[[[63,[23]]],[[8,[[29,[28]]]]]],[[],[[24,[23]]]],0,[[],[[8,[[29,[28]]]]]],0,[[]],[[]],[[[66,[[0,[64,65,52]],[0,[52,65,1,[26,[[0,[52,65,1,[26,[[0,[52,65,1,[26,[[0,[52,65,1,26]]]]]]]]]]]]]],[0,[52,65,1,[26,[[0,[52,65,1,[26,[[0,[52,65,1,[26,[[0,[52,65,1,26]]]]]]]]]]]]]]]],[10,[67]]],[[54,[[29,[53]]]]]],[[]],[[]],[[],10],[[[2,[7]]],[[66,[17,7,7]]]],[[[2,[9]]],[[66,[68,9,69]]]],[[[66,[[0,[64,65,52]],[0,[52,65,1,[26,[[0,[52,65,1,[26,[[0,[52,65,1,[26,[[0,[52,65,1,26]]]]]]]]]]]]]],[0,[52,65,1,[26,[[0,[52,65,1,[26,[[0,[52,65,1,[26,[[0,[52,65,1,26]]]]]]]]]]]]]]]],[10,[70]]],[[54,[[29,[53]]]]]],[[],8],[[],8],[[],11],[[[66,[[0,[64,65,52]],[0,[52,65,1,[26,[[0,[52,65,1,[26,[[0,[52,65,1,[26,[[0,[52,65,1,26]]]]]]]]]]]]]],[0,[52,65,1,[26,[[0,[52,65,1,[26,[[0,[52,65,1,[26,[[0,[52,65,1,26]]]]]]]]]]]]]]]],[10,[71]]],[[54,[[29,[53]]]]]],[[]],0,0,0,0,0,0,0,0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],0,[70],[72],[67],[73],[71],[74],[70,70],[72,72],[67,67],[73,73],[71,71],[74,74],[[]],[[]],[[]],[[]],[[]],[[]],[[],70],[[],72],[[],67],[[],73],[[],71],[[],74],[70,36],[72,36],[67,36],[73,36],[71,36],[74,36],[[70,70],12],[[72,72],12],[[67,67],12],[[73,73],12],[[71,71],12],[[74,74],12],[[70,4],5],[[72,4],5],[[67,4],5],[[73,4],5],[[71,4],5],[[74,4],5],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],8],[[],11],[[],11],[[],11],[[],11],[[],11],[[],11],0,0,[[]],[[]],[[]],[[]],[[]],[[]],0,0,0,[[[75,[[38,[37]]]],40],[[75,[[38,[37]]]]]],[[]],[[]],[[[75,[1]]],[[75,[1]]]],[[]],[[[19,[18]]],[[8,[[75,[41]],21]]]],[[[75,[[38,[37]]]],[42,[67]]],[[8,[[43,[73]],25]]]],[[[75,[3]],4],5],[[]],[[]],[[]],[[],10],[[[75,[[38,[37]]]],36],[[75,[[38,[37]]]]]],[[[75,[[38,[37]]]],36],[[75,[[38,[37]]]]]],[[[38,[37]]],[[75,[[38,[37]]]]]],[[[75,[[38,[37]]]],[42,[70]]],[[8,[[43,[72]],25]]]],[[[75,[[38,[37]]]],40],[[75,[[38,[37]]]]]],[[]],[[],8],[[],8],[[],11],[[[75,[[38,[37]]]],[42,[71]]],[[8,[[43,[74]],25]]]],[[]],[[[45,[[44,[37]]]],[38,[37]],46],[[75,[[47,[[45,[[44,[37]]]],[38,[37]],46]]]]]],[[[38,[37]],48],[[75,[[38,[37]]]]]],0,0,[[[77,[76]],40],[[77,[76]]]],[[]],[[]],[44],[[[77,[76]],[44,[[0,[51,52]]]]]],[[[77,[76]]],[[77,[76]]]],[[]],[[[10,[67]]],[[54,[[29,[53]]]]]],[[[77,[[0,[3,76]]]],4],5],[[]],[[[55,[76]]],[[77,[76]]]],[[]],[[]],[[],56],[[],10],[[[77,[76]],36],[[77,[76]]]],[[[77,[76]],36],[[77,[76]]]],[76,[[77,[76]]]],[57,[[58,[8]]]],[[[77,[76]],57],[[58,[8]]]],[[[10,[70]]],[[54,[[29,[53]]]]]],[[[77,[76]],40],[[77,[76]]]],[[]],[[],8],[[],8],[[],11],[[[10,[71]]],[[54,[[29,[53]]]]]],[[]],[[76,46],[[47,[[77,[76]],46]]]]],"c":[],"p":[[8,"Clone"],[3,"GroupParams"],[8,"Debug"],[3,"Formatter"],[6,"Result"],[15,"str"],[3,"BigUint"],[4,"Result"],[3,"RistrettoPoint"],[3,"Request"],[3,"TypeId"],[15,"bool"],[3,"RFC5114_MODP_1024_160_BIT_PARAMS"],[3,"RFC5114_MODP_2048_224_BIT_PARAMS"],[3,"RFC5114_MODP_2048_256_BIT_PARAMS"],[3,"EC25519_GROUP_PARAMS"],[3,"DiscreteLogChaumPedersen"],[3,"Endpoint"],[8,"TryInto"],[3,"AuthClientLib"],[3,"Error"],[3,"String"],[15,"u8"],[3,"Vec"],[3,"Status"],[8,"ByteConvertible"],[8,"RandomGenerator"],[8,"Error"],[3,"Box"],[3,"RegisterRequest"],[3,"RegisterResponse"],[3,"AuthenticationChallengeRequest"],[3,"AuthenticationChallengeResponse"],[3,"AuthenticationAnswerRequest"],[3,"AuthenticationAnswerResponse"],[15,"usize"],[6,"BoxBody"],[8,"GrpcService"],[3,"AuthClient"],[4,"CompressionEncoding"],[3,"Channel"],[8,"IntoRequest"],[3,"Response"],[3,"Request"],[8,"Service"],[8,"Interceptor"],[3,"InterceptedService"],[3,"Uri"],[8,"Auth"],[3,"AuthServer"],[8,"Body"],[8,"Send"],[8,"Future"],[3,"Pin"],[3,"Arc"],[3,"IntoMakeService"],[3,"Context"],[4,"Poll"],[4,"RfcModpType"],[4,"ChaumPedersenType"],[4,"EllipticCurveType"],[3,"Error"],[15,"slice"],[8,"ChaumPedersen"],[8,"Sync"],[3,"ZkAuth"],[3,"AuthenticationChallengeRequest"],[3,"EllipticCurveChaumPedersen"],[3,"Scalar"],[3,"RegisterRequest"],[3,"AuthenticationAnswerRequest"],[3,"RegisterResponse"],[3,"AuthenticationChallengeResponse"],[3,"AuthenticationAnswerResponse"],[3,"AuthClient"],[8,"Auth"],[3,"AuthServer"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
