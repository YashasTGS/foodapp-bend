import React from "react";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAREhUQEhASFRUVFRAVEBcQFRUVFhUVFxUXFhUVFxYYHyggGRolGxYVITEhJSktLi4uFyEzODMtNygvLisBCgoKDg0OGxAQGy0mHyUrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAwECBAUGB//EAEEQAAIBAgMFBAcGBAYBBQAAAAECAAMREiExBEFRYXEigZGhBRMyQlJysWKSorLB0RQjgtIzU8Lh8PFDBhVzk7P/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAlEQEBAAICAgICAgMBAAAAAAAAAQIRITEDQRJREyJSYUKx8DL/2gAMAwEAAhEDEQA/APBbBc5EdgkXJyCncbnK/LeMummrs6qSCcRBIOHJcj8RFz4DrOaaxY5knhfdyHATqMe0eYU/eUH9ZtuadExtyJIa1hZRwXK/U6nvM2bLToikwamTUJUo4awUe8Cu++UScprpgETDLN3+Dwy0yltzUWBXQogYHQjCAQR3TR6c9GU8CVqfqnDpjdaTWelnazWFu/D15830gtsHyDyZh+kxJtbUziU2M0wz9VPl8c1/bJVRTo1uTi3mLjxtMlWmwzINtx1B6MMj3TrVaaV7tTAD+8g381/bw5cpajU2uLg7+fXjOix50q1DYXcYslXezZD/AHPIRjVqNL2Bjb4mGQ6L+/gI3avS1QsSy02DJkHRSFxKD2csrG4HScx6wP8A40/GPowE0lxx/wDKNW9q7TtTubsxMz3j2emfcYdHH6qfrKsKfFx3K36iLsdNHpUYlSr8SgN8y5H6A985quVNwSDy+k7OxqjUmTGDhIcYlYZaNkL/AGfCLq7Cm7B3Nh/Nab3C5cxjMpOK5t0bUYTxUdk9V3d3hK1qZXXQ6EZg9CJtPo47lJ+UhvpeJak6bmAOoZcj1Bi+NkHynoh+2MXvD2+Y+L9/HjETbQVCbqwRhoGuUPK/u9+XMSm37NgNwpAO454TvW+8cDvHfFpUrLCEIjEIQhsCEIRAQhCICRJkQABhCAMAICSxvnIipmB5BWUkhobLQwwl8UIht6RdmcHMAfMyL+YidOtRsReogIWmGFybEIAQcIOeU5mzjCPWb/8AxjmPe6DzPQxgUYMfrBixWwZ4rWvivpbdrec2U4dvjy/Z0gikf4qeFT+yMqbUzYENSl2BhQKlUE3N87U+0c5ztmuc7gKNWOg5czyGcdV2gWslxcWJPtMP9I5DvJkTHbo/J8eqd6UqgBLMrYVwuUvZWxs1jccCPAjcZxqz3jtnsXsWCizXuCQcrhSBxIA5a7oqvQIGNfZ05qfhP6Hf3EDSYxz5Z5UhHKm4NjOyNlXaV1C1t18g/Lk31668QmPXaSBlrNMbZx6ZaxvNJ2ukygBgQVLob8jiH5j4TEZ2torhqTJVBNQYWBGoAOHC/Oz6brZ8BxDLyxkvDPG7nIDAAiwN7WJvcdP94oxr1CQF3C5Hfa/0EWq3Nst+psPExzniCtHousFqC+hurdGFj9ZrqKRdTqCQe6ci9p2qzYsL/Gov8y9lu82v3zfxXjTDyTnbM4ymY1WGjEdCRNFczI8uoiG2p97E/NZvrGVNpZUNNsPatlhUYBe98hkx+h55KHZGM6n2AfznlwG/65ib5nvmVyaTGJVbyIQi40oQhCICEIRAQhCARCEIgIQjFEAXaFptGyixBNntdV5DM4uBtcgcuky4oaG1cMMMtjkY4gMMiGKEOA9Ea9zfTcBwG4RzKFzfX4ND/Ud3TXprMxrBPY13udf6R7o569NIsNMttmiptBbXdoBkAOAG6C1DMxMhaklW+HQpCX9Za+hysQdCOB/5z1mWlWgzljYftlvJJ0HOV8fZzy6x0rU2e+aXIJsBqQfhPPgd/iAYhT0N23kaLyXiefhxk/xYS4WxuCHJvZgdVA1C+fTSZto0xLmpy5g/CefPf4gXxOmXN7MokFrfEGXvKkDztMbLBKuEhvhIPgbw2gYWZdwZgOgNhHvY6QqCxvENLl5ammK+4DNidAOf7b45CuXDOZ1PRzYqTLvQhx0PZb/T5xC4GsmDsi5xDKoSbZ8CPs+e+P2NPVVBmGRuyzDQBsu0PdO/uyvNvHxWPk5hVYzMbWxN7N+yPjPD5RvjtoWxIa4C5PxJ3KOZ8phrVSxv3ADQDcBDPL0WMRUcsSTqZWEJm0EIQgBCEIAQhIgEyIQiAE1ekaARgF0sB/Ut0c97KT3yuwDthtyXc/0i487DvjEpmpTGfsOcROQCsLgk8Lq3jAqy00LEAAknQCai4p+yQX+IZhfl4n7XhxlTVUAqmhyZjq3LkvLfv4DO5gOwlQghgcwbjrGbUgBxD2WGJeXFe43ETNFHtKU3i7p1A7S94F/6ecRs8IS1OmzGygk8heI1YR/8Id70xyLj9JMC3HersLkuBdlwqShUX1xgq1mbnnMmAf5i+FT9FMVslZlNgxAOo1B6qcj3zaVR88GHiyGwHzBjbuBWRv5Vrqyb9EKg+NPxD6gR2z+jnfERhsoJYhlyAF+MoaC+4RVPDNfwGzN3ec7K0gilMZIwqXYrhtfD/KCX1zY25Am00w8e7yzz8mpw4aKTkABhvjYk6HTF9LDM8zJrVlwlRiGltO0b6twHAD/eK2qviOQstyQOZ94neefhaUV8itgb2zOotwkf0075KJlqVYqeIOTA6EcD++6RVp2AzFze4zyiSYod+qdXpgDEpupyF9Qfhbn9fECNs1DfEiHwGE+amFPaSotZSM8Q+IG2RPK1xwM0nZUZEfGAg9YtyRi1DYbce2cwDlnymkm+mduu2KnTvmTZRqf0A3nl9BnIq1L5AWUaDn8RO8/8E0VXp77sB7Kr2UHGxNyeZIBMq/pFwoRcKqCSMA7Vza/bN23DfbKVJE7tRToOMz2RxchfC+Z7pDVlU3xsx+wMI5glhmORWZsROZzPOLcx74LW+2r0ntxrNiwheS6XOp6mY4Qittu6ckk1EyJIMiBiEIQIQhJVbwCISSsiICEIQNopi1Jm+Iqg6DtN5hPGX2SqypUwsQf5ZyJGjW/1Su1jCETeFxN1ftflwSNl9mp8g/8A0SCfS52t95B+ZUb6iUG0XyNKmx3WUqT3IRFOY+ifVj1nvH/D4qNC/wCg53O4QobjsFPDiIGVwwpFiVYaggg6csplX+HBBWpVBFiDhVs/ERGz17E3vY2vbIg7mXgR+43xtdhe1QX3h0yJB0bg3fY84rotU6ts1O3rKamoCTkezg+yUGZ6g6TFU2hmFr2HBQFXwEfRUpdgcae9hyPIkaoRuP1lqpBzcXBzWouTH5hoSN+h5wOGbJ6Gr1EDpTYqb2IHAkHzEib6e2tSUU1anYBSLsFOYxHIm4zJkzSfj97Z25+tEvSphgQQQ+YJxBE+JTbtNY9MrHO8Q+0u1sRyGgFgB0UZCDV6YRkAdjcFS2FQraHsi97jnuHCZ1a5tMLr06JvXLq+j6AYl2HZTM8+A7zNG1bU5pkuxJubX3WBJA5XcR+0inTRKSm5ADVfnIyH9I8yZh25xgA43Pi1v9M6JNY8MLzly5oaANpUrLLMJG+1KjkxZMtUEgCGh8kASTYSrPFloyWZ4u8CZCxkYDaLYyzmUlbEEIQiAhCEAIQgBAJAjkylBBzKnCbyuxvKZSqtJYRb2NArK4YBpIaI0MScySes07D7/OnU8hf9IkWmvYaRZ8K6stQDvRo5Ct4Z6FMG7N7K2Lc+Cjmf3O6LrVSxxG3QaADIAcgJs2jZqmSJTqYV34GGJt7HLw5Ac4g7G41wj5nRT4EyacrPOt6P2EVEw1GCDP1Za+Tb1yzsfLI7817JsuEGofVvawsKi5E/Eb5DpmeWstWeqTdqT8sIJUDgLC1pWHxnacrbxBX9EvSOLHYC3aVals9O0BbjJSpSIK1HWx1KK4IO5sNrX6W74+l6aZcVOxFNiC1NiSuWh1vfnrF1tip1c6Jz3o2vcfe+su4Y94Ilv+TJt1FfWPeqg7RFrPoMh7vCE1H0Q9Sz8QoPVQFbzBkzK45fS5lPtzbzp+i1AHrSo7Hs/ac+zfpr3c5zKKFmCjUkATq7UwW1NdEyy3t7x/ToIeKezzy9DHxPWI9I1DcDgFHfhF/MmW2exZVN7FlBtrYmxtM3pKoGqMVvhLMVvrYkkX7ped/VOPai1ZcPMt5IaZStbGmo8zs8nHIIlXkulLyLy0pEYlklYwaRwqo5kQMBAACBEYBaUYxkiEIARGAJfSGkqTGSwkOZIlDACXUykItmswlZdTeAy/3jEQgmv0ef5q9T9DM6iaPR1vWKb54hbnfKIqy4r5nPrLC0oJNotq0dSYqbg8jvBG8EbxLmiD26dwRmyjVeanUr5jfxmeadnUizlsI3NvJHwjUny4kQKxenXq6YmN9ASW8jePWqiK2MBqnuqiqAOJd0sb8h3kSu1VhhBpjCGDBrakg55jQEFThFhn0nOMdukybdtP8A1PWAtZcuF/1MmcO0I/zZ/Zfhw+nV9G06dOi1YlvWlsFEWGG1u099bjLxHCY2eb/TVB1eypemoshXMW11G83v3zkl5ef6/r9Ix/blr2K5a490O33VLfpMNQ5zRs1QhahB1VV8WB+imZXmdvDSdi8i8iEhabyQ0rCMjA0CsoJdbx7JUCWeNAES8fQ7Vl0EhVks0IEO0rCEWzAEZa0KMa4lRNrOTACWMAREaGlZLGRCnBCEIgkRqi8WJ1fQuzU6mIM4UgdkkXUnWx4CwY35SsZu6LK6m3PdbS+wj+bT+dPzCdWv6O13Ee0BmBz4gczMuzUCtSnce/TzHzCPLCxMzljmrGUqZY2UEnl9eQ5zbQ9HlhiIIGRFhckceQ+0bDrLVKeWHGqL8KHGT8zDJj1IHACZ6X8mayJwdvwD+8+XWKdyxuSSTl+wH7R9kGiFubmw+6uf4jJTbaim6EJbP+WAvjbMjreScNpbK/qyGslmUj1nZ1BBABzzsp090zO9JBrUv8ik/mwy1fsgJvHaf5zuPQWHXFLKgADMLk5op3/ab7P16R/0SU2TELilVIOhxoL92GEzVLsSTmTqTCLZ6q/8W6hHViDYqbcVP9pWMHpFXyq01PNey3ll4gxVFVajU7QBRqbqDqQbo9u8oe6Y5UzsR8ZXXGy0mT+XUtibSpl7I0B097faZNq2ComZU23EZg9CNYqrkqDkW8WP6AR1HbKieyx5jceol7xvcTrKdViIhadDbtoDqhKIDZrlQBchjrblaY7ybJKuXaoWWCypeQTEa9xILykIbBqmUtcy6iGkZAm0XeDGRDZphIgIgYsYplBJEuJqXSJMeDIdIrBKTCS6EGxkRXjhQEsLW0z3SJMWzWtlr3frNlB8HqwdGYs/yn+X9A/jMaqSbDU5DrH7YQXIGi2UdFGH9L98e/ZWb4dX0X6SKOoc2ek38p7Xwsp0I3ry/wCjp2iuxfFUAx3xBkst87hlIyI6gzibQ3aD2BxBW5E6Nf8AqDTdsO2A9ioOze621Q8V/b/ubYeT1WWXj/yh+1AVjdmJO43wn7pOE/0kGYqmxuL27VtQAQw6ocx105zftGz4bXsQfZYaMP35RWMjLUDQHO3TevdaLLGXsY36c0PNGzAXxEZLnnvPujx8gZvroCqtUQgOCUZr52NiQ4FzmLZhtN0KmxBUuCCFsSGIAxHIYjpZRYWvqTe2/O4WL+UYhRA7bZk5qDv+03L69IooSSSbk6kyz0qp7WEtfMlbN5rcRaE3sTbjfd1Ez2uRb1EI0tbIG4zsRfPnnCVwXLm7KDiwH3gyd5HZ/FaImzaqZUhgeBU8RuPXLylHpg1bbmZSOjWI8jFZrgpVNsye3AKvgoB8xF44VXxMW4knxN5WLZyHOewvzVB5If1iY4f4Z5OPxKf7YmMQQhCAEBCEAeukU7QxSsdpSCEIRGJKyJZI4Fpp2jZWQAm2YB7JvYkXwtwYAjKRsigXqMLqlsj7zH2V6ak8gZFLaWBJPaDe2G0bO+fO+/dLSXJBjKtGwxqbocrnVT8Lc+e/xAVAg6XiiI8QZLxWHKQJMtgj6VAWxvku63tMRqF/U6DmcpOlbGxCzYvgBfvHs/iKypUZWFss873PGbdvKrjwqFxOFAW9gEUYteLMvgZjepe1gBYWNr58zz/aO6nAx55ONjTU/CxXuPaXzDyUhsguHXiuIdVN/wAuOVdpNo16a9l2/D2HGJDqOHMHcY+tRsAwOJD7Lfo3AzlBTNWxbWaZsRdT7SnQiPHyeqMvHrmNVFSTc5hc7HTkO827r8ItXqU39YCQ17348b8QeE6D0wgDJcpkXv7SEjsq3Qb/ALR4TLtVQEWEeW5VYzG42l7W4djVZfbJJZLAhjmQRoeOVr+NoQVG7KuXv7p7R+41/K8vRpEZkWQ64jYEcV4kcrxlFBSVqt7kkrSNiL/bscx+/SKTd5Rb9NX8RQp9hkVmXJiMIF9+QG7Tukzi/wATU+M95vCV+f6/0Pw/9tmRwRgJtvUnc3Pkcr9x3SQpurb1WqGvuZAbfmQRBQf5ifj/ALZpeunqmBcFzhAwhsxfMkkDPIDnlJ3KlzpMiEzaG067qLKzAEgkAkAkaEjvMn+JbfhPVVPna8TJlbpahvrV3ov9JYfqR5Q/l/bHeG/aKhDY0dVpKFVg17lrgi1rW553vExjewvV/osXHRBCEIAQl6KgsATYEgEjcL5mN2/ZTSqMmoBOE/Eu4/8AN9xGN86Z4ympNgBckgADeToIsTdsx9Wpq7zdaXh237gbDmeUIVU2tgLU1IIS9yPec+03TIAcgOMQJEsBGDKFYqbi2YswOYYcCOEbUoi2NL4d4OZQ8DxHBt/IxAl6Vcqbjob5gg6gjeDwlJSFlr2k1QCMaaD211KfuvPuPEhtT9oXfcp0Xm44/Z8eBNg0UwBiffmq6FhxPBfM7uMzVGZ2z1NgNwG4AAaDlKmsSSSSSdSd807E6iojN7IdC1vhDC/leTvZ60v6X/xCovYX8WYufNrd0yIpnd2tExtfHfE2L2Rnc384jDTG5/vL+0rLx89ljnwybMwVlJ0uA3Q5N5ExTIQxU6gkHqDYx1Y0/hf76/2S20vTuGwN2lVsnAz0b3PiDTPKcNMbyFEtRo4mvhLBRiIAJvbRcuJsOhJ3So2in/lv/wDYP7JI2lbEBGs1sQxmxte17DPUzKTnmt889zUjVs20mncsVxFrtbtueKkA4QDwOeU2qiMvrKKgb2B7TLzF8sPMC4+vLq7UrG5pjRRqdALDTkI3ZNrKEFEUHq/902wz1xemGeO+Y3ejtjp13b1tUoFRmLYS1yNFOfn0mX0niYCphtTJKU+HZtceY8Z2NrCmmVpogqkBqy3frYWbdvH7ZeeapbI018an98ryfrNJ8f7ckQjvWD/LT8f90Jhx9tufpxIQhBmIQhGBCEIBMJEIA1vYHzP9Fi4w+wPmb6LFyqUEIQiMTq7WPWVKlI+0HqNR53JYp3jMc+s5U1ekGPrMV8ylFrjiaaH6xxN7K2aiXYKDa+pOgAzLHkBc90dtTBjcCygBUB3KOPM3JPMmbGamaZq4irVDhq4VxEEZ2GYADe1r7pEyfxFIaU2bnUbL7qW+plzU7Tu0nDYXtlpfdeOTZKpFwhA4t2V8WsJP8e/u4U/+NQp+97XnM1RyTckk8SbnxMds9Hy1U9jubesBPw0gajeXZ/FHGjs6e2WY8AwJvzC5D79+UdU9IhL0GVSihVJVRfEoAYkZYxiB3g85mrYAMXqUZSfapM4HQgk4TyIhdJ59j/3Mqf5NNKdr54Q755HtMDx3S42tHFnp0w3xBLKTzCWYdRfpMoaid1Ve9X8rL9ZYJSOlUj56ZH5S0Xyv2eoZWpqoGKjkdGpVDhPQkN4ayqiluaoOqq3mGH0lqKsuaVaRvqMVgRwKuAD3x67EX0TCfsH1iH7pJXzHSLX0e2mupZiRVXtBWF8Q9pQT7QsMyd8S9OruAb5SrflM07fSq2p/ycJCYDhBwnCzdotpmCud90xmiPedByBxn8Nx5y8k4lMWUguhGYyYFb8s5eswZAQALOwsNwbtKPEPLU64TJTVPRjTB4DCtyfGN2zbTh9XZL3BqEAE3F7LiNybXNzfUnvz41zWu79MIEsBANLYpk0i9CizsEUEsxAUDUk6CdL0bRwA1XHs5KDvf/bXw4zFsVIu4UePAbz4Tp+ka1EoiozXUsCpGVsrNe+ZJvcWyl4SSfKll+36xgas2LHc3ve86NOku0jctXhoH6cG5b/rgAvYAXJ0A1PSaqNILmzBTwHabw0HeRImeu+mk8WyTsTDIjzEJ219Nrvoqx3lySx6kWhHrx/yVrP+L5/CEIOYQhCAEIQjAhCEAafYHzN9FioQjpQSYQiMTV6Q9w8aVPyGH/TCEZXsbB2iaX+YLLycZofHs9GMywhH6HsXmr0dY1FJ0W7nogLEeUIQnYy6JY4jc6nM9TJp1WU3U2ysdLEcCDkRyMISiPSmlUgKMDnRfcY/ZOqnkcuYin2Zhr3whHjjLNptsuj32EpY1WwXFwAMTEcrZeJl0dF9mmOtSzH7vsjvB6whFlNXUPG/Kbq9Ou1U+rdicRHq7nJX0Ww0AOhtxB3RC5SISe+VTtsp9lQ/vNfB9kAkFutwQOGZ4TGVtCEWR4GosvhhCYV1ScOmlI0qYVRepV00yW+QvzI8hxmVUVTZiSRqqZWPNiPoD1hCb+Wajn8XNNfaDawsoOoXK/InUjqYlHtCE5ry68eOjPWQhCTpp8q//9k=')", // Add your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
          Login
        </h2>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="exampleInputEmail1"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Email address
          </label>
          <input
            type="email"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div
            id="emailHelp"
            style={{ fontSize: "14px", color: "#666", marginTop: "5px" }}
          >
            We'll never share your email with anyone else.
          </div>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="exampleInputPassword1"
            style={{ display: "block", marginBottom: "5px", color: "#555" }}
          >
            Password
          </label>
          <input
            type="password"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            id="exampleInputPassword1"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="checkbox"
            style={{ marginRight: "10px" }}
            id="exampleCheck1"
          />
          <label htmlFor="exampleCheck1" style={{ color: "#555" }}>
            Check me out
          </label>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;