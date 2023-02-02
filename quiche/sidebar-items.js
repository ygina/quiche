window.SIDEBAR_ITEMS = {"constant":[["MAX_CONN_ID_LEN","The maximum length of a connection ID."],["MIN_CLIENT_INITIAL_LEN","The minimum length of Initial packets sent by a client."],["PROTOCOL_VERSION","The current QUIC wire version."]],"enum":[["CongestionControlAlgorithm","Available congestion control algorithms."],["Error","A QUIC error."],["PathEvent","A path-specific event."],["QlogLevel","Qlog logging level."],["Shutdown","The stream’s side to shutdown."],["Type","QUIC packet type."]],"fn":[["accept","Creates a new server-side connection."],["connect","Creates a new client-side connection."],["negotiate_version","Writes a version negotiation packet."],["retry","Writes a stateless retry packet."],["version_is_supported","Returns true if the given protocol version is supported."]],"mod":[["h3","HTTP/3 wire protocol and QPACK implementation."]],"struct":[["Config","Stores configuration shared between multiple connections."],["Connection","A QUIC connection."],["ConnectionError","Represents information carried by `CONNECTION_CLOSE` frames."],["ConnectionId","A QUIC connection ID."],["Header","A QUIC packet’s header."],["PathStats","Statistics about the path of a connection."],["RecvInfo","Ancillary information about incoming packets."],["SendInfo","Ancillary information about outgoing packets."],["SocketAddrIter","An iterator over SocketAddr."],["Stats","Statistics about the connection."],["StreamIter","An iterator over QUIC streams."]],"type":[["Result","A specialized `Result` type for quiche operations."]]};