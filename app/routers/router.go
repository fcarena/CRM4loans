package routers

import (
	"github.com/gorilla/mux"
)

//InitRoutes - define routes
func InitRoutes() *mux.Router {
	router := mux.NewRouter()
	router = MainRoutes(router)
	router = MenuGet(router)
	//	router = SetHelloRoutes(router)
	router = GetTokenRoutes(router)
	router = SetAddUserRoutes(router)
	router = GetUsersRoutes(router)
	//router = UsersRoutes(router)
	router = LoginRoutesGet(router)
	//	router = LoginRoutesPost(router)
	router = StaticRoutes(router)
	return router
}
