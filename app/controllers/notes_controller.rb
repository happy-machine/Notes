class NotesController < ApplicationController
  before_action :set_note, only: [:show, :edit, :update, :destroy]

  # GET /notes
  # GET /notes.json
  def index
  if user_signed_in?
    
  else
    redirect_to '/users/sign_in'
  end

  end

  # GET /notes/1
  # GET /notes/1.json
  def show

  end

  # GET /notes/new
  def new
   
  end

  # GET /notes/1/edit
  def edit
  end

  def get_notes
    @user = User.find(get_id)
    @notes = @user.notes.all
    if request.headers.env['HTTP_AUTHENTICATION_TOKEN'] || request.headers['HTTP_AUTHENTICATION_TOKEN'] == @user.authentication_token
      respond_to do |format|
        format.html { render :getnotes }
        format.json { render :getnotes }
      end
    end
=begin
    if current_user.authentication_token == request.headers['HTTP_AUTHENTICATION_TOKEN']
      respond_to do |format|
        format.html { render :getnotes }
        format.json { render :getnotes }
      end
    end
=end
  end

  # POST /notes
  # POST /notes.json
  def create
    @user = User.find(get_id)
    if params[:content]
      puts "found content"
      if params[:id] && Note.exists?(params[:id])
        @note = Note.find(params[:id])
      else
        @note = @user.notes.new
      end
      puts "setting content"
      @note.content = params[:content]
    end

  respond_to do |format|
    puts "responding"
      if @note.save
        puts "saving"
        format.html { redirect_to @note, notice: 'Note was successfully created.' }
        format.json { render :show, status: :created, location: @note }
      else
        puts "not saving"
        format.html { render :new }
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
   end
  end

  # PATCH/PUT /notes/1
  # PATCH/PUT /notes/1.json
  def update
    respond_to do |format|
      if @note.update(note_params)
        format.html { redirect_back(fallback_location: root_path) }
        format.json { render :show, status: :ok, location: @note }
      else
        format.html { render :edit }
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /notes/1
  # DELETE /notes/1.json
  def destroy
    @note.destroy
    respond_to do |format|
      format.html { redirect_to notes_url, notice: 'Note was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_note
      @note = Note.find(params[:id])
    end

    def get_id  
      return request.headers.env['HTTP_USER_ID']
    end
    # Never trust parameters from the scary internet, only allow the white list through.
    def note_params
      params.require(:note).permit(:title, :content, :tags, :id, :auth, :user_id, :browser_request, :authentication_token, :auth_token, :authentication_token_created_at, :controller, :action)
    end
end
