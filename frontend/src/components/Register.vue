<script></script>
<template>
        <div class="container">
            <div class="container__signup">
                <div class="container__signup-img">
                    <img src="../assets/signup-img.png" alt="signup">
                </div>
                <div class="container__signup-content">
                    <form method="POST" class="register-form" id="register-form">
                        <h2>REGISTRATION FORM</h2>


                        <div class="container__first">
                            <div class="left"></div>
                            <div class="right">
                                <div class="container__group">
                                    <input type="text" placeholder="First name" name="firstname" id="firstname" required/>
                                </div>
                                <div class="container__group">
                                    <input type="text" placeholder="Last name" name="lastname" id="lastname" required/>
                                </div>
                                
                                <div class="container__radio">
                                    <label for="gender" class="radio-label">Status:</label>
                                    <div class="container__radio-item1">
                                        <input type="radio" name="status" id="newcomer" checked>
                                        <label for="newcomer">Newcomer</label>
                                        <span class="container__radio-check"></span>
                                    </div>
                                    
                                    <div class="container__radio-item1">
                                        <input type="radio" name="status" id="volunteer">
                                        <label for="volunteer">Volunteer</label>
                                        <span class="container__radio-check"></span>
                                </div>
                                
                                </div>
                                <div class="container__row">
                                    <div class="container__group">
                                        <input type="text" placeholder="Post code" name="Postcode" id="Postcode" required/>
                                    </div>
                                    <div class="container__group">
                                        <input type="text" placeholder="City" name="city" id="city" required/>
                                    </div>
                                </div>
                            </div>

                        </div>

                
                            <div class="container__group">
                                <input type="email" placeholder="E-mail" name="email" id="email" />
                            </div>
                            <div class="container__group">
                                <input type="password" placeholder="Password" name="password" id="password">
                            </div>
                            
                            <div class="container__radio">
                                <label for="gender" class="container__radio-label">Gender:</label>
                                <div class="container__radio-item">
                                    <input type="radio" name="gender" id="male" checked>
                                    <label for="male">Male</label>
                                    <span class="container__radio-check"></span>
                                </div>
                                <div class="container__radio-item">
                                    <input type="radio" name="gender" id="female">
                                    <label for="female">Female</label>
                                    <span class="container__radio-check"></span>
                                </div>
                                
                                <div class="container__radio-item">
                                    <input type="radio" name="gender" id="other">
                                    <label for="other">Other</label>
                                    <span class="container__radio-check"></span>
                                </div>
                            </div>
                        
                            <div class="container__group">
                        
                                <div class="container__select">
                                    <select name="nationality" id="nationality">
                                        <option value="" disabled selected>Nationality</option>
                                        <option value="">Congo</option>
                                        <option value="us">Iraq</option>
                                        <option value="uk">Pakistan</option>
                                    </select>
                                    <span class="container__select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                                </div>
                            </div>
                            <div class="container__group">
                            
                                <div class="container__select">
                                    <select name="languages" id="languages">
                                        <option value="" disabled selected>Languages</option>
                                        <option value="French">English</option>
                                        <option value="English">French</option>
                                        <option value="Turkish">Russian</option>
                                        <option value="Turkish">Spanish</option>
                                        <option value="Turkish">Dutch</option>
                                        <option value="Turkish">arabic</option>
                                        <option value="Turkish">Hindo</option>
                                        <option value="Turkish">Chinese</option>
                                        <option value="Turkish">Italian</option>
                                    </select>
                                    <span class="container__select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                                </div>
                            </div>
                            <div class="container__group">

                                <div class="container__select">
                                    <select name="skills" id="skills">
                                        <option value="" disabled selected>Skills</option>
                                        <option value="Translator">Legal assistance</option>
                                        <option value="Translator">Translations</option>
                                        <option value="Host">Mental health</option>
                                        <option value="assistant">Host families</option>
                                        <option value="assistant">Education services</option>
                                        <option value="assistant">Language classes</option>
                                        <option value="assistant">Social assistance</option>
                                    </select>
                                    <span class="container__select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                                </div>
                            </div>
                        
                                <textarea class="container__description" placeholder="Description"></textarea>
                        

                        
                            <div class="container__submit">
                                <input type="submit" value="SEND" class="submit" name="submit" id="submit" />
                            </div>
                    </form>
                </div>
            </div>
        </div>


</template>

<style lang="scss" >
@import '../components/styles/abstract/_base.scss';
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/layout/_register.scss';
</style>
